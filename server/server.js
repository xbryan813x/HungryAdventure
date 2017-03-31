import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import path from 'path';

const webpackConfig = require('../webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/../client/assets')));

require('./config/routes.js')(app);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(8888, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
