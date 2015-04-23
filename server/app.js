'use strict';
 
// simple express server
var express = require('express');
var app = express();

 // Routing
require('./routes')(app);

// Expose app
exports = module.exports = app;

