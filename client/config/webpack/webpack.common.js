import webpack from 'webpack'
const path = require('path');

import HtmlWebpackPlugin from  'html-webpack-plugin'
import  {CleanWebpackPlugin} from 'clean-webpack-plugin';

module.exports = {
   

    // 1
    entry: './src/index.jsx',
    // 2
    output: {
      path: path.resolve(__dirname, '../../','dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
   
    // Babel setup
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test:/\.(gif|png|jpe?g|svg)$/i,
            use: ['file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },]
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js','.jsx']
    },
    plugins: [
        
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'React Application',
          template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
  };