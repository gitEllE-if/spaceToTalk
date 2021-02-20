const { resolve } = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const MiniCSSextractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: () => {
            return process.env.NODE_ENV === 'development' ? 'app.js' : 'app.[contenthash].js';
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.ogg|mp3|wav|mpe?g|png|jpe?g|gif$/i,
                loader: 'file-loader',
                options: {
                    name() {
                        if (process.env.NODE_ENV === 'development') {
                            return '[path][name].[ext]';
                        }
                        return '[contenthash].[ext]';
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCSSextractPlugin.loader, 'css-loader?url=false', 'sass-loader']
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new HTMLwebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCSSextractPlugin({
            filename: () => {
                return process.env.NODE_ENV === 'development' ? 'app.css' : 'app.[contenthash].css';
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new BundleAnalyzerPlugin()
    ]
}