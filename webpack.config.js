const path = require( "path" );

module.exports = {
	entry: {
		"gutenberg-plugin": "./js/src/index.js",
	},
	output: {
		path: path.resolve( __dirname, "js/dist" ),
		filename: "[name].js",
		jsonpFunction: "gatWebpackJsonp"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve( __dirname, "js/src" ),
				loader: "babel-loader",
			}
		]
	}
};
