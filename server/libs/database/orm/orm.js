var config = require('../../../config/config');
var path = require(config.modules.path);
var fs = require(config.modules.fs);
var relational = require(config.modules.orm);


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
 var Person= require('../../../models/orm/person')(db);   
 var helper=require('../../../helpers/dbHelper'); 
 var _helper=new helper();
 _helper.create('relational','mysql','create',Person,{"newRecord":{"id":13,"name":"gianni"}});
} 


// Expose app
exports = module.exports = orm;