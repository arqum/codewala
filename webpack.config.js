var webpack = require('webpack');
var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const isProduction = false;
const devtool = isProduction ? "source-map" : "inline-source-map";

const cssLoader = [
    // cache css output for faster rebuilds
    'cache-loader',
    {
        // build css/sass in threads (faster)
        loader: 'thread-loader',
        options: {
            workerParallelJobs: 2,
        },
    },
    {
        loader: 'style-loader',
    },
    {
        loader: 'css-loader',
        options: {
            module: true,
            importLoaders: 1,
            localIdentName: '[path][name]-[local]',
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
        },
    },
    {
        loader: 'sass-loader',
        options: {
            outputStyle: 'expanded',
            sourceMap: false,
            includePaths: [sourcePath],
        },
    },
];

let rules = [

    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-1']
        }
    },
    {
        test: /\.(svg|jpe?g|png|ttf|mp4|woff2?)$/,
        // include: sourcePath,
        use: {
            loader: 'file-loader',
            options: {
                name: false ? 'static/[name]-[hash:8].[ext]' : 'static/[name].[ext]',
            },
        },
    },
    {
        test: /\.css$/,
        // include: sourcePath,
        use: cssLoader,
    },
    {
        test: /\.scss$/,
        // include: sourcePath,
        use: cssLoader,
    }
];

if (isProduction) {
    rules.push(
        {
            test: /\.(js|jsx)$/,
            // include: sourcePath,
            use: {loader: "babel-loader"},
        }
    )
}

const pluginsList = [
    new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
    })
];

if (isProduction) {
    pluginsList.push(
        new ExtractTextPlugin('style-[contenthash:8].css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({output: {comments: false}}),
        new webpack.optimize.ModuleConcatenationPlugin()
    )
}


module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    devtool: devtool,
    watch: true,
    module: {
        rules: rules
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: pluginsList,

    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 8080,
        host: "0.0.0.0",
        disableHostCheck: true
    }
};