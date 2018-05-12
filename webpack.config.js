const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './app/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        alias: {
            modules: __dirname + '/node_modules/'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: './build',
        port: 4000,
        historyApiFallback: true
    }
}
