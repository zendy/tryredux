const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';
const PATHS = {
  app: path.resolve(__dirname, 'app'),
  dist: path.resolve(__dirname, 'dist'),
  public: path.resolve(__dirname, 'public'),
};

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(PATHS.app, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  },
  devServer: {
    contentBase: PATHS.dist,
    // compress: true,
    // publicPath: PATHS.dist,
    port: 8081,
    historyApiFallback: true,
    // hot: true,
    inline: true,
    watchOptions: {
      watch: true,
    },
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(PATHS.public, 'index.html'),
    }),
  ],
};
