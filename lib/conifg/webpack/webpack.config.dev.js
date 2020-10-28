"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _webpackConfig = _interopRequireDefault(require("./webpack.config.base"));

var _webpackbar = _interopRequireDefault(require("webpackbar"));

var _webpackMerge = _interopRequireDefault(require("webpack-merge"));

var dev = (0, _webpackMerge["default"])(_webpackConfig["default"], {
  mode: 'development',
  devtool: 'cheap-source-map',
  optimization: {
    minimize: false
  },
  plugins: [new _webpackbar["default"]()]
});
var _default = dev;
exports["default"] = _default;