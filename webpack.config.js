//webpack 설정파일
//바벨은 코드를변환 웹팩은 파일변환
//경로설정 path
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //시작점
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templete: './public/index.html',
      fileneme: './index.html', //빌드된 html파일 이름
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
}
