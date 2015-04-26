'use strict';
 
var config = require('./config/config');
var app = require('express')();  

      
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler'),
    favicon = require('serve-favicon'),
  	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override');

var documentMapper=require('./libs/database/odm/odm');
var dev=require('./config/env/development');

var mongo=new documentMapper();
	mongo.connect(dev.mongo.uri);
	mongo.bootStrapModels();

  	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(methodOverride());
    app.use(cookieParser());    


require(config.build.routes.root)(app);                  

app.listen(9000);                       

module.exports = app;  