
 var config = require('../../config/config');
 var userSchema=require(config.build.schemas.user);
 var scheme=new userSchema();

module.exports = function (db, cb) {
        var user=scheme.get();
        db.define('User', user);
        return cb();
};