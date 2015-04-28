'use strict';

   var helper=require('../helpers/dbHelper'); 
   var _helper=new helper();
   var Promise = require("bluebird");
 
  var controller={};

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
     console.log({params:req.params});
     console.log({requestBody:req.body});
     var model = _helper.getModel(req.params.model);
      try{
       _helper.create(req.params.type,req.params.db,'create',model,req.body);
      }
      catch(err){
          throw new Error(err);
      }
  }

  controller.show= function(req, res) {

  };

  controller.getUserByName=function(req, res) {
   
  };

 controller.updateUserByName=function(req, res) {

 }

 controller.deleteUser=function(req, res) {

 }

controller.count=function(req, res) {

 }
 
 // Expose app
exports = module.exports =  controller ;
 
