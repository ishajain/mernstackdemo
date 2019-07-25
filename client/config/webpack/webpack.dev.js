import path from 'path'

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
     // 3
     devServer: {
        contentBase: path.resolve(__dirname, '../../','dist'),
        hot:true,
        proxy: { "/**": { target: 'http://localhost:7000', secure: false }  }
      },
}

    