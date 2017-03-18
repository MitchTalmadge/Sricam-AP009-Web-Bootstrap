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
        }
    })
);

config.plugins.push(
    new CleanWebpackPlugin('www', {
        root: path.join(__dirname, '../')
    })
);

module.exports = config;