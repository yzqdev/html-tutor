const merge = require("webpack-merge");
const os=require('os');
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  devtool: "inline-source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: "./dist", historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:7000,
    host: getIPAdress()
  }

});

/*
获取本机IP
*/
function getIPAdress() {
  let localIPAddress = ``;
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {

    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
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
