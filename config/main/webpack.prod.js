const merge = require('webpack-merge');
const dev = require('./webpack.dev');

module.exports = merge.smart(dev, {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: 'native-ext-loader',
      },
    ],
  },
  devtool: false,
  mode: 'production',
});
