const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        'whatwg-fetch',
        './src/index.js'
    ],
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Ismax Dashboard',
            template: 'index.template.ejs'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [
                            './src/style/vars/index.scss',
                            './src/style/mixins/index.scss'
                        ]
                    }
                }]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]/[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: './'
                    }
                }]
            }
        ]
    }
};