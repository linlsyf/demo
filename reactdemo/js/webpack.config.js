// webpack.config.js
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    // entry: path.resolve(__dirname, './src/navi.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};