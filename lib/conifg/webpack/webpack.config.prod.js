"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _terserWebpackPlugin = _interopRequireDefault(require("terser-webpack-plugin"));

var _optimizeCssAssetsWebpackPlugin = _interopRequireDefault(require("optimize-css-assets-webpack-plugin"));

var _webpackConfig = _interopRequireDefault(require("./webpack.config.base"));

var _webpackMerge = _interopRequireDefault(require("webpack-merge"));

var prod = (0, _webpackMerge["default"])(_webpackConfig["default"], {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new _terserWebpackPlugin["default"](), new _optimizeCssAssetsWebpackPlugin["default"]({
      cssProcessorPluginOptions: {
        preset: ['default', {
          reduceTransforms: false,
          discardComments: {
            removeAll: true
          } // calc: false,

        }]
      }
    })],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~'
    }
  }
});
var _default = prod;
exports["default"] = _default;