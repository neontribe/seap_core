const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(webpackCommon, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "capp_portal")
    }
});