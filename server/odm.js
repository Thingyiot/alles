var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

function odm(url){ 
	this.url=url;
} 

odm.prototype.connect=function(){ 
   mongoose.connect(this.url);
} 

odm.prototype.bootStrapModels=function(){ 

var modelsPath = path.join(__dirname, 'models/odm');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file)(mongoose);
});


} 

odm.prototype.get=function(modelName){ 
	
} 

odm.prototype.upsert=function(modelName){ 
	
} 

odm.prototype.update=function(modelName){ 
	
} 

odm.prototype.delete=function(modelName){ 
	
} 

// Expose app
exports = module.exports = odm;