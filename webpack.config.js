module.exports = {
  entry: './example/app.js',
  output: {
    path: __dirname + '/example',
    filename: 'bundle.js',
    publicPath: "/example/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {"presets": ["es2015", "react"]}},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  },
  devtool: "source-map"
};
