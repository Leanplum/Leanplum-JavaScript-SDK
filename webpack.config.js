const path = require('path')

const libraryName = 'Leanplum'

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
  module: {
    rules: [{
      test: /\.ts$/,
      include: [path.resolve(__dirname, './src')],
      loader: 'ts-loader'
    }]
  }
}
