const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { getEntry, getHtmlWebpackPlugins } = require('./get-entry');

const entry = getEntry();

module.exports = {
  entry,
  target: 'electron-renderer',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../../dist/ui'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
    alias: {
      '@ui': path.resolve(__dirname, '../../ui'),
      '@src': path.resolve(__dirname, '../../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    ...getHtmlWebpackPlugins(entry),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
          to: path.resolve(__dirname, '../../dist/ui'),
          toType: 'dir',
        },
      ],
    }),
  ],
};
