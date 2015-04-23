'use strict';
 
// simple express server
var express = require('./server');
var express = require('express');
var http = require('http');
var app = express();

//  authentication (get from primus) 
//  require('./authentication')(app);

// sessions
// require('./sessions')(app);

// security
// require('./crytonode')(app);

// ORM
// require('./orm')(app);

// Mongodb
// require('./odm')(orm);

// sequalize
// require('./sequalize')(orm);

//  cacheing 
//  require('./cacheing')(app);

// fixtures
// require('./fixtures')(app);


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

