// @ts-check

const merge = require('lodash.merge')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const UglifyJS = require('uglifyjs-webpack-plugin')

let configuration = null
const isInDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
const libraryName = 'Leanplum'

class DtsBundlePlugin {
  /**
   * @param {webpack.Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.done.tap('DtsBundlePlugin', (stats) => {
      // Do not bundle TypeScript declaration files if there are errors.
      if (stats.compilation.errors && stats.compilation.errors.length) {
        return
      }

      require('dts-bundle').bundle({
        name: libraryName,
        main: './dist/src/Leanplum.d.ts',
        out: '../leanplum.d.ts',
        removeSource: true,
        headerText: `
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 `,
        indent: '  ',
        outputAsModuleFolder: true
      })
    })
  }
}

/**
 * @type {webpack.Options.Optimization}
 */
const optimization = {
  minimize: true,
  minimizer: [
    new UglifyJS({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: {
          drop_console: true
        },
        ecma: 5,
        mangle: true,
        output: {
          beautify: false,
          comments: false,
        },
        warnings: false
      }
    })
  ],
  noEmitOnErrors: true,
  sideEffects: true,
  usedExports: true
}

/**
 * @param {string} filename
 * @param {Partial<webpack.Configuration>} options
 * @returns {webpack.Configuration}
 */
const buildFile = (filename, options) => {
  /**
   * @type {Partial<webpack.Configuration>}
   */
  const commonOptions = {
    devtool: 'inline-source-map',
    mode: isInDevMode ? 'development' : 'production',
    module: {
      rules: [{
        test: /\.ts$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'ts-loader'
      }]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: filename
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ silent: true }),
    ],
    resolve: {
      extensions: ['.js', '.ts']
    },
    stats: !isInDevMode && {
      all: false,
      assets: true,
      chunks: false,
      entrypoints: false,
      errorDetails: false,
      errors: true,
      excludeAssets: [ /\.d\.ts$/ ],
      hash: false,
      performance: false,
      warnings: false,
    }
  }

  if (filename.includes('.min.')) {
    commonOptions.devtool = false
    commonOptions.optimization = optimization
  }

  if (filename === 'leanplum.js') {
    commonOptions.plugins.push(new DtsBundlePlugin())
  }

  return merge({}, commonOptions, options)
}

/**
 * @type {Partial<webpack.Configuration>}
 */
const lpConfig = {
  entry: './src/bundles/leanplum.full.ts',
  output: {
    library: libraryName,
    libraryTarget: 'umd'
  }
}

/**
 * @type {Partial<webpack.Configuration>}
 */
const swConfig = {
  entry: './src/PushServiceWorker.ts',
}

if (isInDevMode) {
  configuration = buildFile('leanplum.js', lpConfig)
  configuration.plugins = [new ForkTsCheckerWebpackPlugin({
    compilerOptions: {
      declaration: false,
    },
    silent: false,
  })]
  configuration.module.rules.find((x) => x.loader === 'ts-loader').options = {
    compilerOptions: {
      declaration: false,
    },
    transpileOnly: true
  }
  configuration.watch = true
} else {
  configuration = [
    ...['leanplum.js', 'leanplum.min.js'].map(name => buildFile(name, lpConfig)),
    ...['sw/sw.js', 'sw/sw.min.js'].map(name => buildFile(name, swConfig))
  ]
}

module.exports = configuration
