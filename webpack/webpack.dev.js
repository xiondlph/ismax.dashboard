/**
 * Webpack конфиг для dev окружения
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge({
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        'react-hot-loader/patch'
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}, common);