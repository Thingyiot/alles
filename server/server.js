var documentMapper=require('./odm');
var sqlMapper=require('./orm');
// fixtures
// require('./fixtures')(app);

var mongo=new documentMapper('mongodb://appContracts:!2014*TuRner!@ds027749.mongolab.com:27749/contracts-dev');
var sql=new sqlMapper('postgres://user:pass@example.com:5432/dbname');

mongo.connect();
sql.connect();