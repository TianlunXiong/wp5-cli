"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ScssTemplate = exports.HtmlTemplate = exports.WebpackTemplate = exports.BootstrapTemplate = exports.AppTemplate = void 0;

var WebpackTemplate = function WebpackTemplate() {
  return "// const { ModuleFederationPlugin } = require(\"webpack\").container;\nmodule.exports = {\n  entries: {\n    index: {\n      entry: ['./src/bootstrap'],\n      template: './src/index.html',\n    },\n  },\n  output: {\n    filename: '[id].entry.js',\n    chunkFilename: '[id].chunk.js',\n  },\n  plugins: [\n    // /**\n    //  * Webpack 5's new feature.\n    //  */\n    // new ModuleFederationPlugin({\n    //   name: 'app',\n    //   library: { type: 'var', name: 'app' },\n    //   filename: 'remoteEntry.js',\n    //   shared: { react: { singleton: true }, 'react-dom': { singleton: true } },\n    // }),\n  ]\n};\n";
};

exports.WebpackTemplate = WebpackTemplate;

var BootstrapTemplate = function BootstrapTemplate() {
  return "import('./app');";
};

exports.BootstrapTemplate = BootstrapTemplate;

var AppTemplate = function AppTemplate() {
  return "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './app.scss';\n\nconst App = () => <div className=\"title\">Hello, World!</div>;\n\nReactDOM.render(<App />, document.getElementById('app'));\n";
};

exports.AppTemplate = AppTemplate;

var HtmlTemplate = function HtmlTemplate() {
  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">\n  <meta name=\"format-detection\" content=\"telephone=no, email=no\">\n  <title>wp5</title>\n</head>\n\n<body>\n  <div id=\"app\"></div>\n</body>\n\n</html>\n";
};

exports.HtmlTemplate = HtmlTemplate;

var ScssTemplate = function ScssTemplate() {
  return ".title {\n  font-size: 24px;\n  text-align: center;\n}\n";
};

exports.ScssTemplate = ScssTemplate;