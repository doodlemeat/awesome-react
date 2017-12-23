'use strict';

const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 9000;

app.use('/', routes());

if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const webpackDevConfig = require('./config/webpack.config.dev.js');
  const compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
  }));
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});