const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackCommon, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "capp_portal")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        }),
        new HTMLWebpackPlugin({
            filename: "privacy.html",
            template: "./src/privacy.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader", //2. Inject styles into DOM
                    "css-loader" //1. Turns css into common js
                ]
            }
        ]
    }
});