"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _mkdirp = require("mkdirp");

var _chalk = _interopRequireDefault(require("chalk"));

var _signale = _interopRequireDefault(require("signale"));

var _utils = require("../conifg/utils");

var _template = require("../template");

var wirte = function wirte(dir, code) {
  _fs["default"].writeSync(_fs["default"].openSync(dir, 'w'), code);
};

function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _context;

    var pwd, folders, configFileName;
    return _regenerator["default"].wrap(function _callee$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            pwd = (0, _utils.getProjectPath)();
            folders = {
              src: [{
                name: 'bootstrap.tsx',
                code: _template.BootstrapTemplate
              }, {
                name: 'app.tsx',
                code: _template.AppTemplate
              }, {
                name: 'app.scss',
                code: _template.ScssTemplate
              }, {
                name: 'index.html',
                code: _template.HtmlTemplate
              }]
            };
            configFileName = 'wp5.config.js';
            wirte(_path["default"].resolve(pwd, configFileName), (0, _template.WebpackTemplate)());
            (0, _forEach["default"])(_context = (0, _keys["default"])(folders)).call(_context, function (key) {
              var _context2;

              (0, _mkdirp.sync)(key);
              (0, _forEach["default"])(_context2 = folders[key]).call(_context2, function (file) {
                var _context3, _context4;

                wirte(_path["default"].resolve(pwd, key, file.name), file.code());
                console.info((0, _concat["default"])(_context3 = (0, _concat["default"])(_context4 = "   ".concat(_chalk["default"].green('create'), " ")).call(_context4, key, "/")).call(_context3, file.name));
              });
            });

            _signale["default"].success('模版初始化成功');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}