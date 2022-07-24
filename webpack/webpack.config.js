const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.[hash].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname, "dist"),
                publicPath: "/",
            },
            {
                directory: path.join(__dirname, "public"),
                publicPath: "/public",
            },
        ],
        port: 5432,
    },
};
