const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //单文件入口
    mode:"development",
    entry: "./src/index.js",
    // 出口
    output: {
        path: path.resolve(__dirname,"dist/"),
        filename: "assets/js/app.js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: [path.resolve(__dirname, "node_modules")]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader' ,
                    'css-loader' ,
                    'postcss-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader' ,
                    'css-loader' ,
                    'postcss-loader',
                    'less-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ]
            },
        ]
    },

    devServer: {
        open: true,
        port: 9000,
        contentBase: './src/common',
        // 服务器打包资源后的输出路径
        publicPath: '/'
    }
}