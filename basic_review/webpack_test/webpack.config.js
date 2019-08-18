const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefix = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // entry: "./src/index.js",
  // -- 数组式可以多入文件，最后合成一个
  // entry: ["./src/index.js", "./src/login.js"],
  // -- 多入口多出口
  entry: {
    index: "./src/index.js",
    login: "./src/login.js"
  },
  output: {
    // -- filename: "bundle.js",
    // -- [name] 就可以将文件名与入口文件名一一对应
    filename: "[name].js",
    // -- 添加hash 防止文件缓存， 每次4位hash串
    // filename: "bundle.[hash:4].js",
    path: path.resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // "style-loader",
          "css-loader"
        ] // 右向左
        // --
        // use:[
        //     {loader: 'style-loader'},
        //     {loader: 'css-loader'},
        // ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // "style-loader",
          "css-loader",
          "less-loader"
          // "postcss-loader" //之后再搞
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "assets/images"
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: "html-withimg-loader"
      },
      // 字体与svg图片
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: "file-loader"
      }
      // {
      //   test: /\.js$/,
      //   use: "babel-loader",
      //   include: /src/, // 只转化src目录下的js
      // }
    ]
  },
  plugins: [
    // clean
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // -- 用哪个html作为模板
      template: "./src/index.html",
      hash: true, // 打包好的bundle.js会加上hash
      // -- 多页面
      filename: "index.html",
      chunks: ["index"] // 对应index.js
    }),
    // -- 多页面
    new HtmlWebpackPlugin({
      // -- 用哪个html作为模板
      template: "./src/login.html",
      hash: true, // 打包好的bundle.js会加上hash
      // -- 多页面
      filename: "login.html",
      chunks: ["login"] // 对应index.js
    }),
    // --现在的extract-text-webpack-plugin也支持了拆分成多个css，而目前mini-css-extract-plugin还不支持此功能
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      hmr: true,
      filename: "assets/style/[name].css"
      // chunkFilename: "[id].css"
    }),
    // AutoPrefix
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin()
  ],
  //  optimization: {
  //      splitChunks: {
  //          cacheGroups: {
  //              vendor: {   // 抽离第三方插件
  //                  test: /node_modules/,   // 指定是node_modules下的第三方包
  //                  chunks: 'initial',
  //                  name: 'vendor',  // 打包后的文件名，任意命名
  //                  // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
  //                  priority: 10
  //              },
  //              utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
  //                  chunks: 'initial',
  //                  name: 'utils',  // 任意命名
  //                  minSize: 0    // 只要超出0字节就生成一个新包
  //              }
  //          }
  //      }
  // },
  //
  devServer: {
    // contentBase: './dist',
    // host: 'localhost',      // 默认是localhost
    port: 3000, // 端口
    open: false, // 自动打开浏览器
    hot: true // 开启热更新
  },
  mode: "development",
  devtool: "source-map", // enum
  resolve: {
    // 别名
    // alias:{ }
    // extensions:['.js','.json','.css']
  }
};
