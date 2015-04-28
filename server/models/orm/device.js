module.exports = function (db) {

 var config = require('../../config/config');

        var Device = db.define("device",  {
		     name: String
		});

		return Device;
};