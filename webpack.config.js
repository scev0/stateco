
const path = require("path");
const webpack = require("webpack");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const root_dir_path = path.resolve(__dirname);
const out_dir_path = path.resolve(root_dir_path, "build");
const src_dir_path = path.resolve(root_dir_path, "src");
const build_timestamp = Math.floor(Date.now() / 1000);


const config = (env, argv) => {
	const is_production = argv.mode === "production";
	const is_test = env.test ? true : false;

	return {
	target: "web",
	context: root_dir_path,
	resolve: {
		modules: ['node_modules'], // Default value
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	bail: true, // exit on first error during bundling
	mode: is_production ? "production" : "development",
	entry: {
		"index": path.resolve(src_dir_path, is_test ? "./test.tsx" : "./index.tsx"),
	},
	output: {
		path: out_dir_path,
		filename: "[name].js",
		chunkFilename: "[name].js",
		clean: true, // Clean the output directory before emit
	},
	stats: {
		timings: true
	},
	performance: {
		hints: false
	},
	devtool: false, // is_production ? "source-map" : "inline-source-map",
	module: {
		rules: [
			// HTML: bundle HTML
			{
				test: /\.html$/,
				exclude: /\.(template|tpl|t)\.html$/,
				type: "asset/resource",
				generator: {
					filename: "[name][ext]"
				},
				use: [
					{ loader: "extract-loader" },
					{
						loader: "html-loader",
						options: {
							attributes: {
								list: [
									{ tag: "img", attribute: "src", type: "src" },
								]
							},
							minimize: false,
						}
					}
				]
			},
			// CSS: minimize and bundle CSS
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: false,
						}
					},
				],
			},
			// Images: copy images 'as is'
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]", // Output path and filename for images
				},
			},
			{
				test: /\.(ico)$/,
				type: "asset/resource",
				generator: {
					filename: "[name][ext]",
				},
			},
			// Text files: copy text files 'as is'
			{
				test: /\.(txt)$/,
				type: "asset/resource",
				generator: {
					filename: "[name][ext]",
				},
			},
			// JSX|TSX
			{
				test: /\.(jsx?|tsx?)$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									"targets": "> 1%",
								}
							]
						],
						plugins: [
							["@babel/plugin-transform-runtime"],
							[
								"@babel/plugin-transform-react-jsx",
								{
									"pragma": "__JSX"
								}
							]
						],
						compact: false
					}
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: {
					loader: "ts-loader",
					options: {
						compilerOptions: {
							// Code generation
							"sourceMap": false, // if devtool: false
							"target": "esnext",
							"module": "esnext",

							// Language features
							"jsx": "preserve",
							"noEmitOnError": true,
						},

						// True - compile only files listed in the project's config and dependencies,
						// Setting False would mean compile everything, including all TS files deep in the tsconfig folder.
						"onlyCompileBundledFiles": true,

						/**
						 * Format error messages to short format that Visual Studio and VSCode
						 * can understand and provide navigation to source code.
						 *
						 * @param {{content?: string, file: string, line: number, character: number, severity: string, code: number}} message
						 * @param {{black: {bold: (s: string) => string}}} colors
						 * @returns
						 */
						"errorFormatter": (message, colors) => {
							if(message.content && message.content.indexOf("\n")>=0) {
								return `${message.file}(${message.line},${message.character}): ${message.severity} TS${message.code}:\n${colors.black.bold(message.content)}\n`;
							} else {
								return `${message.file}(${message.line},${message.character}): ${message.severity} TS${message.code}: ${colors.black.bold(message.content)}`;
							}
						}
					}
				}
			},
			// Text substitution and replacements
			{
				test: /\.(html|css|jsx?|tsx?)$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: [
					// Replace ?vvv=$timestamp$ in resource URLs in html and js with current time.
					// This one must go after all other html and js processing rules.
					{
						loader: "string-replace-loader",
						options: {
							search: "\\?vvv=\\$timestamp\\$",
							replace: "?vvv=" + build_timestamp,
							flags: "g"
						}
					}
				]
			},
		]
	},
	optimization: {
		runtimeChunk: {
			name: "0"
		},
		splitChunks: {
			cacheGroups: {
				// Dont output "default" chunk
				default: false,
				// Output code shared between two or more entry points to file "1.js".
				// This file may not exist if there is only one entry point or nothing in common.
				commons: {
					test: /\.(js|ts)x?$/,
					chunks: "all",
					name: "1",
					minChunks: 2,
					enforce: true,
					priority: 5,
				},
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					enforce: true,
					name: "vendors",
					priority: 10,
				},
			}
		},
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			"__JSX":  [path.resolve(src_dir_path, './jsx-runtime.ts'), "JSXCreateElement"]
		}),
		new ProgressPlugin(function(percentage, msg) {
			process.stdout.write(".");
		}),
	],
	devServer: {
		hot: false,
		liveReload: false,
		compress: false,
		port: 9011,
	},
	}; // return
};

module.exports = config;
