'use strict';
 
// simple express server
var config = require('./config/config');
var server = require(config.build.server);
var express = require(config.modules.express);
var http = require(config.modules.http);
var app = express();

//  authentication (get from primus) 
//  require('./authentication')(app);

// sessions
// require('./sessions')(app);

// security
// require('./crytonode')(app);

//  cacheing 
//  require('./cacheing')(app);


 // Routing
require(config.build.routes.root)(app);
app.server = http.createServer(app);
app.server.listen(9000);
exports = module.exports = app;

