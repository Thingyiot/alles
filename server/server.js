var documentMapper=require('./odm');
// fixtures
// require('./fixtures')(app);

var mongo=new documentMapper('mongodb://appContracts:!2014*TuRner!@ds027749.mongolab.com:27749/contracts-dev');
mongo.connect();