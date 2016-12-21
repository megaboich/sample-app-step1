var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            __dirname,
            "node_modules"
        ],
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
    ],

    // Disable verbose webpack warnings about big-sized chunks
    performance: {
        hints: false
    },

    // Turn on sourcemaps
    devtool: 'source-map',
}