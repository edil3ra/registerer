var webpack = require('webpack')

module.exports = {
  entry: {
    "vendor": "./app/js/vendor",
    "main": "./app/js/main"
  },
  output: {
    path: __dirname,
    filename: "./static/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./static/vendor.bundle.js"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "Tether": 'tether',
      "window.Tether": "tether"
    })
  ]
}
