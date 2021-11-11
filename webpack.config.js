const webpack = require('webpack');
const { resolve } = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const MiniCSSextractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", resolve(__dirname, 'src', 'index.js')],
    output: {
        path: resolve(__dirname, 'build'),
        filename: () => {
            return process.env.NODE_ENV === 'development' ? 'app.js' : 'app.[contenthash].js';
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
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
                test: /\.ogg|mp3|wav|mpe?g|png|jpe?g|gif|svg$/i,
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
                use: [
                    {
                        loader: MiniCSSextractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new HTMLwebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCSSextractPlugin({
            filename: () => {
                return process.env.NODE_ENV === 'development' ? 'app.css' : 'app.[contenthash].css';
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: resolve(__dirname, "public"),
                    globOptions: {
                        ignore: ["**/*.html"]
                    }
                }
            ],
        })
        // new BundleAnalyzerPlugin()
    ]
}