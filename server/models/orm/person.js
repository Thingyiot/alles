module.exports = function (db) {


 var config = require('../../config/config');
 var userSchema=require(config.build.schemas.user);
 var scheme=new userSchema();

        var user=scheme.get();
        var Person = db.define("person",  {
		     name: String
		});

		return Person;

};