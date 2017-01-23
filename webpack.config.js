var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack Config
var webpackConfig = {
  entry: {
    'bundle': './src/main.browser.ts',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'}
    ]),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: false,
    })
  ],

  module: {
    exprContextCritical: false,
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
      {test: /\.html$/, loader: 'raw-loader'},

    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 500},
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

};


module.exports = webpackMerge(defaultConfig, webpackConfig);
