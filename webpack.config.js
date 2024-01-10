const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            }
        ],
    },
    devServer: {
        watchFiles: ['src/**/*'],
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "index.html" },
            ],
        })
    ]
};