const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});