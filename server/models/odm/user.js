'use strict';

module.exports = function(mongoose) {
  
  var db = mongoose.connection,
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema,
      crypto = require('crypto');

  var TYPE = 'User';

  /**
   * User Schema
   */
  var schema = new Schema({
    name: String,
    email: {
      type: String,
      unique: true
    },
    role: {
      type: String,
      default: 'user'
    },
    hashedPassword: String,
    provider: String,
    salt: String,
    facebook: {},
    twitter: {},
    github: {},
    google: {}
  });

  /**
   * Expose type to outside world.
   * @type {string}
   */
  schema.statics.TYPE = TYPE;

  return db.model(TYPE, schema);
};