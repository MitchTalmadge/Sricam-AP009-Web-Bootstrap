/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

var config = require('./webpack.common.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');

config.output = {
    path: path.join(__dirname, '../www/'),
    filename: './resources/scripts/[name]-[chunkhash].js',
    chunkFilename: './resources/scripts/[id].chunk.js'
};

config.plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html.ejs'),
        favicon: path.join(__dirname, '../src/resources/favicons/favicon.ico'),
        filename: path.join(__dirname, '../www/index.html'),
        inject: 'body',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        },
        chunksSortMode: 'dependency'
    })
);

config.plugins.push(
    new CleanWebpackPlugin('www', {
        root: path.join(__dirname, '../')
    })
);

module.exports = config;