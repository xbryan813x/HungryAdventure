import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname + '/../build')));

app.get('*', (request, response) => {
 response.sendFile(path.resolve(__dirname +  '/../build', 'index.html'));
});
require('./config/routes.js')(app, express)

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(8888, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
