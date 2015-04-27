module.exports = function (db) {


 var config = require('../../config/config');
 var userSchema=require(config.build.schemas.user);
 var scheme=new userSchema();

        var user=scheme.get();
        var Person = db.define("person",  {
		     name: String
		});
       
       /***
		var newRecord = {};
			newRecord.id= 4;
			newRecord.name = "Johnybg"
			Person.create(newRecord, function(err, results) {
				if (err) throw err;
			    console.log('Succsessfully Inserted Record');
		 });
        **/

};