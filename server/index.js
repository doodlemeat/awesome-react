'use strict';

const express = require('express');
const routes = require('./routes');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack({ .. webpack options .. });

const app = express();
const PORT = process.env.PORT || 9000;

app.use('/', routes());

if(process.env.NODE_ENV === 'development') {
  app.use();
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});