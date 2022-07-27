module.exports = api => {
  api.cache(true);
  const presets = [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
          esmodules: true
        },
        // 有两种模式：normal, loose。其中 normal 更接近 es6 loose 更接近 es5
        loose: false,

        // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false, defaults to "commonjs"
        modules: false,

        // 打印插件使用情况
        debug: true
      }
    ]
  ];
  const plugins = [
    [
      // 重用把 babel 注入的帮助代码， 依赖 @babel/runtime
      "@babel/plugin-transform-runtime",
      {
        // false || 2, 变成全局或者局部
        corejs: false,

        // 生成器运行时的使用，变成全局或者局部
        regenerator: true,

        // 帮助函数是变成 inline, 还是  lib
        helpers: true,

        // helpers 切换成 esm
        useESModules: true
      }
    ]
  ];
  return {
    presets,
    plugins
  };
};
