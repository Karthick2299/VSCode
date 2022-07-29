const { resolve } = require("path");
const path = require("path");
const { Extension } = require("typescript");
const { CleanPlugin } = require("webpack");

module.exports = {

    entry: "./src/example.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
    },
devtool: "inline-source-map",
module: {
    rules : [{
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
    }]
},

resolve: {
    extensions: [".ts"]
},
plugins: [
    new CleanPlugin.CleanWebpackPlugin()
]
};