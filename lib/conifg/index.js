"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/entries"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _webpackConfig = _interopRequireDefault(require("./webpack/webpack.config.dev"));

var _webpackConfig2 = _interopRequireDefault(require("./webpack/webpack.config.prod"));

var _utils = require("./utils");

var _webpackMerge = _interopRequireDefault(require("webpack-merge"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

function getWebpackConfig(type) {
  var _context;

  var _getCustomConfig = (0, _utils.getCustomConfig)(),
      entries = (0, _entries["default"])(_getCustomConfig),
      webpackConfig = (0, _objectWithoutProperties2["default"])(_getCustomConfig, ["entries"]);

  var config;

  switch (type) {
    case 'dev':
      config = _webpackConfig["default"];
      break;

    case 'prod':
      config = _webpackConfig2["default"];
      break;

    default:
      throw new Error('无效类型参数');
  }

  config.entry = {};
  (0, _forEach["default"])(_context = (0, _keys["default"])(entries || {})).call(_context, function (key) {
    var _config, _config$plugins;

    if ((entries === null || entries === void 0 ? void 0 : entries[key].entry) && config.entry) {
      config.entry[key] = entries[key].entry;
    }

    (_config = config) === null || _config === void 0 ? void 0 : (_config$plugins = _config.plugins) === null || _config$plugins === void 0 ? void 0 : _config$plugins.push(new _htmlWebpackPlugin["default"]({
      template: entries === null || entries === void 0 ? void 0 : entries[key].template,
      filename: "".concat(key, ".html"),
      // chunks: ['manifest', key],
      favicon: entries === null || entries === void 0 ? void 0 : entries[key].favicon,
      inject: (entries === null || entries === void 0 ? void 0 : entries[key].inject) !== false
    }));
  });
  return (0, _webpackMerge["default"])(config, webpackConfig);
}

var _default = getWebpackConfig;
exports["default"] = _default;