'use strict';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (config) => {
  config.plugins.push(new MonacoWebpackPlugin());
  config.module = {
    rules: [{
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    }]
  }

  return config;
};