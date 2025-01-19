const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, '../src', 'index.js'),
        other1: path.join(__dirname, '../src', 'other1.js'),
        other2: path.join(__dirname, '../src', 'other2.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src', 'index.html'),
            filename: 'indexOut.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src', 'other1.html'),
            filename: 'otherOut1.html',
            chunks: ['other1']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src', 'other2.html'),
            filename: 'otherOut2.html',
            chunks: ['other2']
        })
    ]
}