const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const libraryName = 'Leanplum'

class DtsBundlePlugin {
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

module.exports = {
  entry: {
    'leanplum': './src/bundles/leanplum.full.ts',
    'sw/sw': './src/PushServiceWorker.ts'
  },
  devtool: 'inline-source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new DtsBundlePlugin(),
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      include: [path.resolve(__dirname, './src')],
      loader: 'ts-loader'
    }]
  }
}
