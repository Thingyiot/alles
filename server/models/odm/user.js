'use strict';

  var config = require('../../config/config');
  var userSchema=require(config.build.schemas.user);
  var scheme=new userSchema();

module.exports = function(mongoose) {

var user=scheme.get();

  var db = mongoose.connection,
      Schema = mongoose.Schema,
      TYPE = 'User';

  /**
   * User Schema
   */
  var schema = new Schema(user);

  /**
   * Expose type to outside world.
   * @type {string}
   */
  schema.statics.TYPE = TYPE;

  return db.model(TYPE, schema);
};