
var config = require('../../../config/config');
var path = require(config.modules.path);
var fs = require(config.modules.fs);
var mongoose = require(config.modules.mongoose);


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
	var modelsPath = path.join(__dirname, '../../../models/odm');
	console.log(modelsPath);
	fs.readdirSync(modelsPath).forEach(function (file) {
	  require(modelsPath + '/' + file)(mongoose);
	});
} 


// Expose app
exports = module.exports = odm;