const path = require('path')

module.exports = {
  entry: './src/Leanplum.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'leanplum.js',
    library: 'Leanplum',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  }
}
