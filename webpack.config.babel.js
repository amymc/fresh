/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var webpack = require('webpack');

var config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = config;
