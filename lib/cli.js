"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _commander = require("commander");

var _dev = _interopRequireDefault(require("./option/dev"));

var _prod = _interopRequireDefault(require("./option/prod"));

var _init = _interopRequireDefault(require("./option/init"));

var _package = _interopRequireDefault(require("../package.json"));

_commander.program.version(String(_package["default"].version));

_commander.program.command('init').description('初始模版').action(_init["default"]);

_commander.program.command('dev').description('运行开发环境').option('-m, --mode <mode>', '编译模式').option('-h, --host <host>', '站点主机地址', '0.0.0.0').option('-p, --port <port>', '站点端口号', '3000').action(_dev["default"]);

_commander.program.command('build').description('打包静态资源').option('-d, --out-dir <path>', '输出目录', 'dist').option('-a, --analyzer', '是否启用分析器').action(_prod["default"]);

_commander.program.parse(process.argv);