const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: "/",
        clean: true,
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".scss"],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/style'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: './postcss.config.js',
                            },
                        },
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|webp|jpg|jpeg|svg|gif|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[name].[contenthash].[ext]'
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            minify: isProduction ? {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            } : false,
        }),
    ],
};