// Inject a better http parser that handles the invalid headers sent by the IP Camera.
process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let devConfig = require('./webpack/webpack.dev.config.js');

// Configure the dev server
let devServer = new WebpackDevServer(webpack(devConfig), devConfig.devServer);

// Start the dev server
devServer.listen(devConfig.devServer.port);