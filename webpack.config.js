const path = require('path')

module.exports = {
  entry: './src/Leanplum.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'leanplum.js',
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
