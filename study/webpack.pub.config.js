const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app:path.join(__dirname, './src/main.js'),
        vendors: './src/an3.js'//抽离第三方包
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name:'vendors'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),


    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|gif|bmp|jpg$)/, use: 'url-loader?limit=8000&name=images/[name].[ext]' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    }

}
