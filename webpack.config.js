const path = require('path');

module.exports = {
    entry: './src/Leanplum.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'leanplum.js',
        libraryTarget: 'umd',
        library: 'leanplum',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
};
