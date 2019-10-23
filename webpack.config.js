const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const { config } = require('./config')

const { nodeEnv } = config

const isProd = nodeEnv === 'production'

const plugins = isProd ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer(),
            ],
        },
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/app-[hash].css',
    }),
    new CompressionPlugin({
        test: /\.js$|\.css/,
        filename: '[path].gz',
    }),
    new ManifestPlugin(),
] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer(),
            ],
        },
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/app.css',
    }),
]

module.exports = {
    devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
    entry: './src/frontend/index.js',
    mode: nodeEnv,
    output: {
        path: isProd ? path.join(process.cwd(), './src/server/public') : '/',
        filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
        publicPath: '/',
    },
    devServer: {
        port: 3600,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimizer: isProd ? [new TerserPlugin()] : [],
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition()
                        return chunks.some(chunks => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name))
                    },
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: {
                    loader: 'eslint-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: `
                                @import "${path.resolve(__dirname, 'src/frontend/styles/lib/Vars.scss')}";
                                @import "${path.resolve(__dirname, 'src/frontend/styles/lib/App.scss')}";
                            `,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg|webp|ttf|eot|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins,
}
