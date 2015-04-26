var config = require('../config/config');

var documentMapper=require(config.build.db.mappers.doc);
var relationalMapper=require(config.build.db.mappers.relational);
var dev=require('../config/env/development');


var mongo=new documentMapper();
mongo.connect(dev.mongo.uri);
mongo.bootStrapModels();

var sql=new relationalMapper();
sql.connect(dev.mysql.uri);
