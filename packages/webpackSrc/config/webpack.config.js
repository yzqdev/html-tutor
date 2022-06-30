const path = require(`path`);
const webpack = require(`webpack`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`); //这里必须这样写
const htmlWebpackPlugin = require(`html-webpack-plugin`);
const os = require(`os`);
module.exports = {
  mode: `development`,
  entry: {
    app: `./src/index.js`
  },
  output: {
    filename: `[name].[hash].js`,
    path: path.resolve(__dirname, `../build`),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: `anonymous`
  },
  plugins: [
    new webpack.BannerPlugin(`版权所有翻版必究`),
    new CleanWebpackPlugin(), //这里注意要大写啊
    new htmlWebpackPlugin({
      minify: false,
      title: `webpackinit`,
      filename: `index.html`,
      template: `public/index.html`
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, `../src`),
      path.resolve(__dirname, `../node_modules`)
    ],
    alias: {
      components: path.resolve(__dirname, `/src/components`)
    }
  },
  optimization: {
    splitChunks: {
      chunks: `async`,
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: `~`,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: `vendors`,
          chunks: `all`
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: `single`
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [`file-loader`]
      },
      {
        test: /\.(csv|tsc)$/,
        use: [`csv-loader`]
      },
      {
        test: /\.xml$/,
        use: [`xml-loader`]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `inline-source-map`,

  devServer: {
    contentBase: `./dist`,
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 7000,
    host: getIPAdress()
  }
};

/*
获取本机IP
*/
function getIPAdress() {
  let localIPAddress = ``;
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (
        alias.family === `IPv4` &&
        alias.address !== `127.0.0.1` &&
        !alias.internal
      ) {
        localIPAddress = alias.address;
      }
    }
  }
  return localIPAddress;
}
