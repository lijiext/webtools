module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "我的小工具";
      return args;
    });
  }
};
