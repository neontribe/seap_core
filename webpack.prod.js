const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(webpackCommon, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "capp_portal")
    },
    plugins: [new CleanWebpackPlugin()]
});