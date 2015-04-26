'use strict';

   var User = require('mongoose').model('User'),
     _ = require('lodash'),
    controller = {};

    var Pojo=require('../pojos/User');
    var _user=new Pojo();
    _user.init();

  function sender(res) {
    return function(err, result) {
      if (!err) {
        return res.json(result);
      }
      console.log(err);
      return res.json(500, err);
    };
  }
  
 controller.create= function(req, res) {

  };

  controller.show= function(req, res) {

  };

  controller.getUserByName=function(req, res) {
   
  };

 controller.updateUserByName=function(req, res) {

 }

 controller.deleteUser=function(req, res) {

 }
 
 // Expose app
exports = module.exports =  controller ;
 
