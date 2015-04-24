
module.exports = function (db, cb) {
        db.define('person', {
            name : String
        });

        return cb();

};