var documentMapper=require('./odm');
var relationalMapper=require('./orm');

var options={
	mongo:'mongodb://chuggh:mongo@ds049219.mongolab.com:49219/chuggh',
	relational:'mysql://localhost:3306/'
};

var mongo=new documentMapper();
mongo.connect(options.mongo);
mongo.bootStrapModels();

var sql=new relationalMapper();
sql.connect(options.relational);
