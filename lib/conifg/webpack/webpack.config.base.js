"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _base = _interopRequireDefault(require("../babel/base"));

var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));

var _cleanWebpackPlugin = require("clean-webpack-plugin");

var resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less', '.scss']
};
var _module = {
  rules: [{
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: _base["default"]
    }]
  }, {
    test: /\.(css|scss)$/,
    use: [{
      loader: _miniCssExtractPlugin["default"].loader,
      options: {
        publicPath: '../'
      }
    }, {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 2
      }
    }, {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: true,
        implementation: require('sass')
      }
    }]
  }, {
    test: /\.less$/,
    use: [{
      loader: _miniCssExtractPlugin["default"].loader,
      options: {
        publicPath: '../'
      }
    }, {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 2
      }
    }, {
      loader: require.resolve('less-loader')
    }]
  }, {
    test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
    exclude: /node_modules/,
    use: [{
      loader: require.resolve('url-loader'),
      options: {
        limit: 1,
        name: 'images/[name].[hash:8].[ext]'
      }
    }]
  }, {
    test: /\.(woff|woff2|ttf|eot)$/,
    use: [{
      loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
    }]
  }]
};
var config = {
  module: _module,
  resolve: resolve,
  plugins: [new _miniCssExtractPlugin["default"]({
    filename: 'stylesheet/[name].[contenthash:8].css',
    chunkFilename: 'stylesheet/[id].[contenthash:8].css'
  }), new _cleanWebpackPlugin.CleanWebpackPlugin()]
};
var _default = config;
exports["default"] = _default;