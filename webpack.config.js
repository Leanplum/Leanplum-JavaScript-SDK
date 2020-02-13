const path = require('path')

const libraryName = 'Leanplum';

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function(){
    var dts = require('dts-bundle');
    dts.bundle({
      name: libraryName,
      main: './dist/src/Leanplum.d.ts',
      out: '../leanplum.d.ts',
      removeSource: true,
      headerText: `
 *
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *`,
      outputAsModuleFolder: true
    });
  });
};

module.exports = {
  entry: {
    leanplum: './src/bundles/leanplum.full.ts',
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
    extensions: [ '.ts' ],
  },
  plugins: [
    new DtsBundlePlugin()
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules|test/,
      loader: 'ts-loader'
    }]
  }
}
