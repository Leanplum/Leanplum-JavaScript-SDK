/* eslint-disable @typescript-eslint/camelcase */

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import fs from 'fs'
import merge from 'lodash.merge'
import path from 'path'
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack'

let configuration = null
const isInDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
const libraryName = 'Leanplum'

class DtsBundlePlugin {
  private outFileName = 'leanplum.d.ts'

  apply(compiler: webpack.Compiler): void {
    compiler.hooks.done.tap('DtsBundlePlugin', (stats) => {
      return;
      // Do not bundle TypeScript declaration files if there are errors.
      if (stats.hasErrors()) {
        return
      }

      require('dts-bundle').bundle({
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
        main: './dist/src/Leanplum.d.ts',
        name: libraryName,
        out: '../' + this.outFileName,
        outputAsModuleFolder: true,
      })

      this.removeSourceDefs(path.resolve(__dirname, './dist'))
    })
  }

  removeSourceDefs(rootPath: string): void {
    for (const item of fs.readdirSync(rootPath, { withFileTypes: true })) {
      if (item.isFile() && item.name.endsWith('.d.ts') && item.name !== this.outFileName) {
        fs.unlink(path.join(rootPath, item.name), () => { /* noop */ })
      } else if (item.isDirectory()) {
        this.removeSourceDefs(path.join(rootPath, item.name))
      }
    }
  }
}

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        ecma: 5,
        mangle: true,
      },
    }),
  ],
  emitOnErrors: false,
  sideEffects: true,
  usedExports: true,
}

function createConfig(
  filename: string,
  options: Partial<webpack.Configuration>
): webpack.Configuration {
  const commonOptions: webpack.Configuration = {
    devtool: 'inline-source-map',
    mode: isInDevMode ? 'development' : 'production',
    module: {
      rules: [{
        test: /\.ts$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: !isInDevMode && (filename === 'leanplum.js'),
          },
        },
      }],
    },
    output: {
      hashFunction: 'xxhash64',
      path: path.resolve(__dirname, './dist'),
      filename: filename,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ silent: true }),
    ],
    resolve: {
      extensions: ['.js', '.ts'],
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
    },
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

const lpConfig: Partial<webpack.Configuration> = {
  entry: './src/bundles/leanplum.full.ts',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
  },
}

const swConfig: Partial<webpack.Configuration> = {
  entry: './src/PushServiceWorker.ts',
}

if (isInDevMode) {
  configuration = createConfig('leanplum.js', lpConfig)
  configuration.plugins = [new ForkTsCheckerWebpackPlugin({
    silent: false,
  })]
  configuration.module.rules.find((x) => x.loader === 'ts-loader').options = {
    transpileOnly: true,
  }
  configuration.watch = true
} else {
  configuration = [
    ...['leanplum.js', 'leanplum.min.js'].map(name => createConfig(name, lpConfig)),
    ...['sw/sw.js', 'sw/sw.min.js'].map(name => createConfig(name, swConfig)),
  ]
}

module.exports = configuration
