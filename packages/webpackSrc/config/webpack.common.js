const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //这里必须这样写
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js",
    bootcss: "./src/bootcss.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../build"),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: "anonymous"
  },
  plugins: [
    new webpack.BannerPlugin("版权所有翻版必究"),
    new CleanWebpackPlugin(), //这里注意要大写啊
    new htmlWebpackPlugin({
      minify: false,
      title: "webpackinit",
      filename: "index.html",
      template: "public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../node_modules")
    ],
    alias: {
      components: path.resolve(__dirname, "/src/components")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: "single"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsc)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
