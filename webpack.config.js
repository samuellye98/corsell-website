module.exports = {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      },
      { test: /\.css$/, loader: ["style-loader", "css-loader"] }
    ]
  },
  modules: true,
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
