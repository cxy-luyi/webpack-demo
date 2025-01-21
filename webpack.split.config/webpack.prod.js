const path = require('path')
const webpackCommonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'less-loader',
                    'postcss-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:8].css'
        })
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    priority: 1,
                    test: /[\\/]node_modules[\\/]/,
                    minSize: 0,
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    priority: 0,
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    }
})