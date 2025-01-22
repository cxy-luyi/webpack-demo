const path = require('path')
const webpackCommonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 2025,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        open: true,
        proxy: [
            {
                context: ['/'],
                target: "http://localhost:2025/indexOut.html"
            }
        ]
    }
})