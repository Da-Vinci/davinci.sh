const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackVersionPlugin = require('webpack-version-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    
    entry: [
        './frontend/scss/app.scss',
        './frontend/js/app.js',
    ],
    output: {
        filename: 'js/app-[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
        },
        {
            test: /\.css$/,
            loaders: ['vue-style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            include: [/node_modules/, path.join(__dirname, 'frontend/scss')],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
            use: [
                'file-loader'
            ]
        }],
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.vue'],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app-[contenthash].css'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${process.env.NODE_ENV}'`
            }
        }),

        new WebpackVersionPlugin({
            cb: (manifest) => {
                manifest = {
                    js: manifest.files.main.filter(f => f.endsWith('.js'))[0],
                    css: manifest.files.main.filter(f => f.endsWith('.css'))[0],
                }
                
                let template = fs.readFileSync(path.join(__dirname, 'frontend', 'app.html')).toString();
                
                template = template.replace('{{{js}}}', manifest.js);
                template = template.replace('{{{css}}}', manifest.css);
                fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), template);
            }
        }),

        new WebpackMd5Hash(),

        ...(process.env.NODE_ENV === 'production' ? [
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin(),
        ] : []),
    ]
}