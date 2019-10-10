const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(webpackCommon, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "capp_portal")
    }
});