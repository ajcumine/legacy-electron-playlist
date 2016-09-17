import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies

import config from './webpack.development.config';

const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

app.listen(PORT);
