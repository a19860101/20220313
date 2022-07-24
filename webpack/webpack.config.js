const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
                // use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.[hash].css'
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
