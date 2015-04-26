'use strict';

module.exports = function(mongoose) {

    var userModel = mongoose.model('User'),
    _ = require('lodash'),
    controller = {};

  function sender(res) {
    return function(err, result) {
      if (!err) {
        return res.json(result);
      }
      res.log.error(err, 'sensor sender');
      return res.json(500, err);
    };
  }
  
controller.setUser= function(req, res) {
   	
};

controller.getUser= function(req, res) {

};

controller.updateUser=function(req, res) {
    
}

controller.deleteUser=function(req, res) {

}

  return controller;
};

