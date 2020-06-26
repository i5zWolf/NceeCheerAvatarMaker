const webpack = require("webpack");
const now = require("dayjs")().format("YYYY-M-D HH:mm:ss");
const version = require("./package.json").version;

const banner = `
/*
Author: Fly3949
Build time: ${now}
Environment: ${process.env.NODE_ENV}
Version: ${version}
===
「君と僕もさ、また明日へ向かっていこう」
*/
`;

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].minify = { removeComments: false };
      args[0].title = require("./package.json").title;
      args[0].time = now;
      args[0].env = process.env.NODE_ENV;
      args[0].version = version;
      return args;
    });

    config.plugin("banner").use(webpack.BannerPlugin, [
      {
        banner,
        raw: true
      }
    ]);
  }
};
