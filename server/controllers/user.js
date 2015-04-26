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
    var user=new User(req.body.user);
    user.save(sender(res));
  };

  controller.show= function(req, res) {
    return User.find({},sender(res));
  };

  controller.getUserByName=function(req, res) {
     return User.find({'name':req.params.username},sender(res));
  };

 controller.updateUserByName=function(req, res) {

  var oldUser;
     Device.find({'name':req.body.name}, function (err, user) {
      if (!err) {
        oldUser=user;
        //get current value  using key 
        //set new value 
         user.save(sender(res));

      } else {
        return res.send(err);
      }
    });

 }

 controller.deleteUser=function(req, res) {

 }
 
 // Expose app
exports = module.exports =  controller ;
 
