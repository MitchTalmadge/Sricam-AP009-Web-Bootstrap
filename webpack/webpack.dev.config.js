/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

var config = require('./webpack.common.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

config.devtool = 'source-map';

config.devServer = {
    contentBase: path.join(__dirname, "../tmp/"),
    proxy: {
        "/*.cgi": "http://192.168.1.40:81/"
    },
    historyApiFallback: true,
    compress: true,
    port: 9000
};

config.output = {
    path: path.join(__dirname, '../tmp/'),
    filename: './resources/scripts/[name].js',
    sourceMapFilename: './resources/scripts/[name].map',
    chunkFilename: './resources/scripts/[id].chunk.js'
};

config.plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/app.htm.ejs'),
        filename: 'app.htm',
        inject: 'body',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        },
        dev: true,
        chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.htm.ejs'),
        favicon: path.join(__dirname, '../src/resources/favicons/favicon.ico'),
        filename: 'index.htm',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        },
        dev: true
    })
);

module.exports = config;