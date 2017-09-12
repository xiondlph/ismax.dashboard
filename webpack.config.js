var path = require('path'),
    HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(jsx)$/, use: 'babel-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
}