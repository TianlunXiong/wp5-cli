"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _forkTsCheckerWebpackPlugin = _interopRequireDefault(require("fork-ts-checker-webpack-plugin"));

var _utils = require("../conifg/utils");

var _conifg = _interopRequireDefault(require("../conifg"));

function _default(_x) {
  return _ref2.apply(this, arguments);
}

function _ref2() {
  _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _context2;

    var host, port, config, _config$plugins, compiler, serverConfig, devServer;

    return _regenerator["default"].wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            host = _ref.host, port = _ref.port;
            config = (0, _conifg["default"])('dev');

            if (_fs["default"].existsSync((0, _utils.getProjectPath)('tsconfig.json'))) {
              config === null || config === void 0 ? void 0 : (_config$plugins = config.plugins) === null || _config$plugins === void 0 ? void 0 : _config$plugins.push(new _forkTsCheckerWebpackPlugin["default"]());
            }

            compiler = (0, _webpack["default"])(config);
            serverConfig = {
              publicPath: '/',
              noInfo: true,
              inline: true
            };
            devServer = new _webpackDevServer["default"](compiler, serverConfig);
            devServer.listen(port, host, function (err) {
              var _context;

              if (err) {
                return console.error(err);
              }

              console.warn((0, _concat["default"])(_context = "http://".concat(host, ":")).call(_context, port, "\n"));
            });
            (0, _forEach["default"])(_context2 = ['SIGINT', 'SIGTERM']).call(_context2, function (sig) {
              process.on(sig, function () {
                devServer.close();
                process.exit();
              });
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}