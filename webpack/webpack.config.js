const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    // production, development
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.[hash].bundle.js",
        assetModuleFilename: 'images/[name][ext]'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                // use: ["style-loader", "css-loader"],
                // use: ["style-loader", "css-loader", "sass-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader",'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)/,
                type: 'asset'
            }
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
