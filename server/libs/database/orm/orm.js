var config = require('../../../config/config');
var path = require(config.modules.path);
var fs = require(config.modules.fs);
var relational = require(config.modules.orm);

function orm(link){ 
	this.link=link;
} 

orm.prototype.connect=function(url){ 
  var db = relational.connect(url);
  db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);
      	  console.log('Connected to:'+url);
      	  bootStrapModels(db);
  });
} 


function bootStrapModels(db){ 
		var modelsPath = path.join(__dirname, '../../../models/orm');
         db.load(modelsPath , function (err) {
			    var Person = db.models.person;
		 });
} 

orm.prototype.get=function(modelName){ 
	
} 

orm.prototype.upsert=function(modelName){ 
	
} 

orm.prototype.update=function(modelName){ 
	
} 

orm.prototype.delete=function(modelName){ 
	
} 

// Expose app
exports = module.exports = orm;