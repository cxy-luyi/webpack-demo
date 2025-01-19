const path = require('path')
const webpackCommonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        outputPath: "imgOut/"
                    }
                }
            }
        ]
    }
})