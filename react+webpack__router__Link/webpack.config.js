var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");


module.exports={
	
	devtool: "eval-source-map",//配置生成Source Maps，选择合适的选项

	entry: __dirname+"/app/main.js",
	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},


	module:{
		loaders:[
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:"babel",//在webpack的module部分的loaders里进行配置即可
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:'style!css?modules!postcss'//添加对样式表的处理
			}
		]
	},

	postcss: [
		require('autoprefixer')//调用autoprefixer插件
	],



	devServer:{
		contentBase: "./public",//本地俯卧其所加载的页面所在的目录
		colors: true,//终端中输出结果为彩色
		historyApiFallback:true,//不跳转
		inline: true//实时刷新
	},
	
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
		})
	]
	
}