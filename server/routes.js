const express = require('express');
const path = require('path');
const getPackages = require('./get-packages');
const router = require('express-promise-router')();

function setup() {
  router.get('/packages', getPackages);

  router.use(express.static(path.resolve(__dirname, '..', 'build')));
  
  router.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });

  return router;
}

module.exports = setup;