module.exports = function(app) {

 var  passport = require('passport');
 /**
  , site = require('./site')
  , oauth2 = require('./oauth2')
  , user = require('./user')
  , client = require('./client')
  , util = require('util')
  */

  app.use(passport.initialize());
  app.use(passport.session());

}