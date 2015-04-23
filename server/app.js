'use strict';
 
// simple express server
var server = require('./server');
var express = require('express');
var http = require('http');
var app = express();

//  authentication (get from primus) 
//  require('./authentication')(app);

// sessions
// require('./sessions')(app);

// security
// require('./crytonode')(app);

//  cacheing 
//  require('./cacheing')(app);

// transpots
// require('./transpots')(app);

// socketio
// require('./socketio')(transpots);

// amqp
// require('./amqp')(transpots);

// primus
// require('./primus')(transpots);


 // Routing
require('./routes')(app);


app.server = http.createServer(app);
app.server.listen(9000);

// Expose app
exports = module.exports = app;

