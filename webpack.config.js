const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client/src'),
  entry: [
    './client.js',
  ],
  output: {
    path: path.join(__dirname, 'client/assets'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015', 'react', 'stage-2'],
          plugins:['transform-decorators-legacy'],
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
