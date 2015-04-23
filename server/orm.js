var Sequelize = require('sequelize');
var path = require('path');
var fs = require('fs');


function orm(url){ 
	this.url=url;
} 

orm.prototype.connect=function(){ 
  var sequelize = new Sequelize(this.url);
} 


orm.prototype.bootStrapModels=function(){ 

var modelsPath = path.join(__dirname, 'models/orm');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file)(mongoose);
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