const path = require('path')
const MiniCssExtarctPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: "source-map",
  entry: './src/main.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist'
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.css', '.styl' ]
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 5000
  },


  module: {
    rules: [

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.styl$/,
        use: [
          {loader: MiniCssExtarctPlugin.loader, options: {publicPath: '/dist'}},
          {loader: 'style-loader'},
          {loader: 'stylus-loader'}
        ]
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}