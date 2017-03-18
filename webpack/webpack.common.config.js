var path = require('path');
var webpack = require('webpack');

var config = {
    cache: true,

    entry: {
        polyfills: path.join(__dirname, '../src/scripts/polyfills'),
        vendor: path.join(__dirname, '../src/scripts/vendors/vendors'),
        main: path.join(__dirname, '../src/scripts/main')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.(component|page)\.html$/,
                use: ["to-string-loader", "html-loader?-minimize"]
            },
            {
                test: /\.html$/,
                use: "html-loader?-minimize",
                exclude: [/\.(component|page)\.html$/]
            },
            {
                test: /\.(component|page)\.css$/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.css(\?v=[\d\.]+)?$/,
                use: ["style-loader", "css-loader"],
                exclude: [/\.(component|page)\.css$/]
            },
            {
                test: /\.(png|jpg|gif|svg)(\?v=[\d\.]+)?$/,
                use: "file-loader?name=./resources/images/[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=[\d\.]+)?$/,
                use: 'file-loader?name=./resources/fonts/[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor', 'main'].reverse(),
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],

    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx'],
        modules: ['node_modules'],
        alias: {
            // Force all modules to use the same jquery version.
            'jquery': path.join(__dirname, '../node_modules/jquery/src/jquery')
        }
    },

    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};

module.exports = config;
