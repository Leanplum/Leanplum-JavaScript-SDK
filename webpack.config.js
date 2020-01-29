const path = require('path')

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
    library: 'Leanplum',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    }]
  }
}
