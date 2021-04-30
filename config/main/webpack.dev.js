const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const dotenv = require('dotenv');

const envFile = fs.readFileSync(`env/.env.${process.env.NODE_ENV}`);
const envConfig = dotenv.parse(envFile);

module.exports = {
  target: 'electron-main',
  entry: path.resolve(__dirname, '../../src/main.ts'),
  output: {
    path: path.resolve(__dirname, '../../dist/main'),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@ui': path.resolve(__dirname, '../../ui'),
    },
  },
  devtool: 'source-map',
  mode: 'development',
  externals: {
    sqlite3: 'commonjs2 sqlite3',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.config': JSON.stringify(envConfig),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new FilterWarningsPlugin({
      exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /redis/, /sql.js/, /react-native-sqlite-storage/],
    }),
  ],
};
