const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
	entry: "./index.jsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_module/,
				use: "babel-loader"
			},
			{
				test: /\.(le|c)ss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "less-loader" },
					{
						loader: "postcss-loader",
						options: { sourceMap: true }
					},
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	]
};

module.exports = config;
