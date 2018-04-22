const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const apps = require('./apps');

let entrys = {};
let pages = [];
apps.forEach((app) => {
    let name = app.module;
    let appPath = app.path;
    let appTitle = app.title;
    entrys[name] = appPath;
    pages.push(new HtmlWebpackPlugin({
        title: appTitle,
        filename: path.join(appPath, 'index.html'),
        template: path.join(appPath, 'index.html'),
        chunks: name ? ['common', name] : ['common']
    }));
});

module.exports = {
	devtool: 'cheap-source-map',
	// context: '.',
    entry:entrys,
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'build'),
		filename: 'scripts/[name].js',
        chunkFilename: 'scripts/[name].js'
	},
	module: {
		rules: [{
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
			test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
		},{
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/'
                }
            }
        },{
            test: /\.s(c|a)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
        ]
	},
	plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([
            'asserts'
        ]),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
        })
	].concat(pages),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	}

};
