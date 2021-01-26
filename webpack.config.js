module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'index.js',
		path: __dirname + '/dist',
		libraryTarget: 'umd',
	},

	resolve: {
		extensions: [ '.js', '.jsx', ],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
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
		],
	},

	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
		},
	},
};
