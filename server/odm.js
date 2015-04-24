var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

function odm(link){ 
   this.link=link;
} 

odm.prototype.connect=function(url){ 
   mongoose.connect(url);
   var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function (callback) {
		  console.log('Connected to:'+url);
		});
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