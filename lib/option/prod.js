"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackBundleAnalyzer = require("webpack-bundle-analyzer");

var _signale = require("signale");

var _utils = require("../conifg/utils");

var _conifg = _interopRequireDefault(require("../conifg"));

function _default(_x) {
  return _ref2.apply(this, arguments);
}

function _ref2() {
  _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var outDir, analyzer, config, _config$plugins, barActive;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            outDir = _ref.outDir, analyzer = _ref.analyzer;
            config = (0, _conifg["default"])('prod');

            if (config.output) {
              config.output.path = (0, _utils.getProjectPath)(outDir);
            }

            if (analyzer) {
              config === null || config === void 0 ? void 0 : (_config$plugins = config.plugins) === null || _config$plugins === void 0 ? void 0 : _config$plugins.push(new _webpackBundleAnalyzer.BundleAnalyzerPlugin({
                analyzerMode: 'static',
                generateStatsFile: true
              }));
            }

            barActive = new _signale.Signale({
              scope: 'wmf',
              interactive: true,
              types: {
                process: {
                  badge: '●',
                  color: 'yellow',
                  label: "build"
                },
                success: {
                  label: "build"
                }
              }
            });
            barActive.process('正在打包...');
            (0, _webpack["default"])(config).run(function (e) {
              if (e) {
                console.error(e);
                return;
              }

              barActive.success('打包完成!');
              console.log('finishd');
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}