const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
	const extractCSS = new ExtractTextPlugin('vendor.css');
	const isDevBuild = !(env && env.prod);
	const sharedConfig = {
		stats: { modules: false },
		resolve: { extensions: ['.js'] },
		module: {
			rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
			]
		},
		entry: {
			vendor: [
				'bootstrap',
				'bootstrap/dist/css/bootstrap.css',
				'font-awesome/css/font-awesome.css',
				'jquery'
			]
		},
		output: {
			publicPath: '/dist/',
			filename: '[name].js',
			library: '[name]_[hash]'
		},
		plugins: [
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', "window.jQuery": "jquery", Tether: "tether", "window.Tether": "tether" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
			new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/11580
			new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/14898
            new webpack.IgnorePlugin(/^vertx$/),// Workaround for https://github.com/stefanpenner/es6-promise/issues/100
			new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|zh-tw)$/)
		]
	};

	const clientBundleConfig = merge(sharedConfig, {
		output: { path: path.join(__dirname, 'wwwroot', 'dist') },
		module: {
			rules: [
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) }
			]
		},
		plugins: [
            extractCSS,
            new webpack.DllPlugin({
            	path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            	name: '[name]_[hash]'
            })
		].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
		])
	});

	return [clientBundleConfig];
}
