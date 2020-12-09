const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['core-js/stable', './main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/Interactive-Park-Map/",
        filename: 'main.bundle.js'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    // CSS and file (image) loaders
    module: {
        rules: [{
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/',
                        publicPath: './assets/'
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
    },
    // Below is needed for webpack-dev-server
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    }
};