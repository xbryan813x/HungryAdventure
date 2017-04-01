const path = require('path');

module.exports = {
  entry: './client/src/client.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js',
    publicPath: 'build/',
    pathinfo: true
  },
  
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:['stage-2'],
          plugins:['transform-decorators-legacy'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
