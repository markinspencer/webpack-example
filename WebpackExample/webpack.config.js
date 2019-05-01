const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        "Default.aspx": path.resolve(__dirname, 'src/pages/Default.aspx.js'),
        "About.aspx": path.resolve(__dirname, 'src/pages/About.aspx.js')
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            //All JS files will be handled here
            {
                use: "babel-loader",
                exclude: /node_modules/,
                test: /\.js$/
            },
            // All files with ".css" will be handled here
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
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 40000 }
                    },
                    "image-webpack-loader"
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
        ]
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
    ]),
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            },
        }
    }
};