const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (env) => {
  return {
    entry: './src/guide/index.tsx',
    output: {
      path: path.join(__dirname, 'dist/guide'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      plugins: [
        new TsConfigPathsPlugin({
          configFileName: 'tsconfig.json',
          compiler: 'typescript'
        })
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ]
  };
};
