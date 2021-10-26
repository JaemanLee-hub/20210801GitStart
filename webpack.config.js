//webpack 설정파일

//경로설정 path
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //시작점
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugin: [
    new HtmlWebpackPlugin({
      templete: './public/index.html',
      fileneme: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    open: true,
  },
}
