import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
module.exports = {

  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}

  