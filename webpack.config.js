var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main'
    },

    resolve: {
        extensions: ['.ts'],
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
    ],
}