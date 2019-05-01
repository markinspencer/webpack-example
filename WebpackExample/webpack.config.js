const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const loaders = [
    {
        use: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },

    // All files with ".less" will be handled and transpiled to css
    {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
    },
    // All image files will be handled here
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            "file-loader"
        ]
    },

    // All font files will be handled here
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            {
                loader: "file-loader"
            }
        ]
    },
];

module.exports = {
    devtool: "source-map",
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        "Default.aspx": path.resolve(__dirname, 'src/pages/Default.aspx.js'),
        "About.aspx": path.resolve(__dirname, 'src/pages/About.aspx.js'),
        vendor: [
            "jquery",
            "jquery-validation",
            "bootstrap",
            "jquery-validation-unobtrusive",
            "highcharts"
        ]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        // Making sure the CSS and JS files that are split out do not break the template cshtml.
        publicPath: "/dist/",
    },
    module: {
        rules: loaders
    },
    plugins: ([
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanWebpackPlugin({
            "verbose": true // Write logs to console.
        }),
    ])
}