var config = require('../../../config/config');
var path = require(config.modules.path);
var fs = require(config.modules.fs);
var relational = require(config.modules.orm);
var Person=null;

function orm(link){ 
	this.link=link;
} 

orm.prototype.connect=function(url){ 

relational.connect(url, function (err, db) {
  if (err) throw err;
        console.log('Connected to:'+url);
          bootStrapModels(db);
    });
} 

function bootStrapModels(db){ 
 Person= require('../../../models/orm/person')(db);   
} 

orm.prototype.getModel=function(modelName){
	if(modelName === 'person'){
		return Person;
	}
}


// Expose app
exports = module.exports = orm;