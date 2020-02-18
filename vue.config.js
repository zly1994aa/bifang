// // vue.config.js
// const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const isProduction = process.env.NODE_ENV === 'production'

// module.exports = {
// 	publicPath: "./",
// 	//默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
// 	//如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
// 	//这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
// 	//也可以使用三元运算符配置开发和正式环境上不同的路径

// 	outputDir: "dist", //打包后生成的生产环境构建文件的目录，dist是默认值。默认情况下每次打包都会清空上次打包文件（构建时传入 --no-clean 可关闭该行为）。
// 	//官方提示:始终使用outputDir，而不要修改 webpack 的 output.path。
// 	assetsDir: "dist", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
// 	indexPath: "index.html", //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
// 	filenameHashing: true, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
// 	//webpack配置
// 	configureWebpack: config => {
// 	    if (isProduction) {
// 	      config.plugins.push(new CompressionWebpackPlugin({
// 	          algorithm: 'gzip',
// 	          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
// 	          threshold: 10240,
// 	          minRatio: 0.8
// 	        })
// 	      )
// 	    }
// 	  },
// 	// configureWebpack: {
// 	// 	//关闭 webpack 的性能提示
// 	// 	performance: {
// 	// 		hints: false
// 	// 	},

// 	// 	//或者

// 	// 	//警告 webpack 的性能提示
// 	// 	performance: {
// 	// 		hints: 'warning',
// 	// 		//入口起点的最大体积
// 	// 		maxEntrypointSize: 50000000,
// 	// 		//生成文件的最大体积
// 	// 		maxAssetSize: 30000000,
// 	// 		//只给出 js 文件的性能提示
// 	// 		assetFilter: function(assetFilename) {
// 	// 			return assetFilename.endsWith('.js');
// 	// 		}
// 	// 	}
// 	// },
// 	devServer: {
// 		host: '0.0.0.0',
// 		port: 8000, // 服务端口
// 	},
// }

const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件

const webpack = require("webpack");
// vue.config.js
module.exports = {
  //基本路径(相对于服务器根目录   静态资源的相对路径)
  publicPath: "", //font scss资源路径 不同环境切换控制

  productionSourceMap:false,//打包时不要map文件
  //输出文件目录
  outputDir: "dist",

  //是否在保存的时候检查
  lintOnSave: true,

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',

  devServer: {
    // host: '',
    // host: "0.0.0.0",
    // https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    // hotOnly: true, // 热更新
    port: 9090,
    proxy:{
       '/api': {
              target: 'http://59.110.25.130:8051/api/index.php?',
              secure: false,  // 如果是https接口，需要配置这个参数
			  ws:true,
              changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
              pathRewrite: {
                '^/api': '/'
              }
		}    
  },
  
  },
  configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        // "windows.jQuery":"jquery"
      }),
      // new CompressionPlugin({//gzip压缩配置
      //   test:/\.js$|\.html$|\.css/,//匹配文件名
      //   threshold:10240,//对超过10kb的数据进行压缩
      //   deleteOriginalAssets:true,//是否删除原文件
      // })
    ]
  },
  	configureWebpack: config => {
  	      config.plugins.push(new CompressionWebpackPlugin({
  	          algorithm: 'gzip',
  	          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  	          threshold: 10240,
  	          minRatio: 0.8
  	        })
  	      )
  	  },
}

