var path = require('path');

var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

var precss = require('precss'),
  lost = require('lost'),
  cssnext = require('postcss-cssnext'),
  fontawesome = require('postcss-font-awesome'),
  rucksack = require('rucksack-css');

module.exports = {
  // The standard entry point and output config
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist'),
    publicPath: '/.tmp/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local].[hash:base64:5]!postcss-loader')
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'url'
    }, {
      test: /\.json$/,
      loader: 'json'
    },, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  postcss: [precss, cssnext, lost, rucksack, fontawesome],
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("bundle.css", {
      allChunks: true
    }),
    // OccurenceOrderPlugin : optimizes chunks and modules by how much they are used in your app;
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
