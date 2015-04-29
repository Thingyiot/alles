'use strict';

   var helper=require('../helpers/dbHelper'); 
   var _helper=new helper();
  
  var controller={};

  
 controller.create= function(req, res) {
     console.log({params:req.params});
     console.log({requestBody:req.body});
     var model = _helper.getModel(req.params.model);
      try{
         _helper.create(req.params.type,req.params.db,'create',model,req.body);
         res.send({inserted:{requestBody:req.body}});
      }
      catch(err){
          throw new Error(err);
          res.send({error:err});
      }
  }

  controller.findOne= function(req, res) {
     console.log({params:req.params});
     console.log({requestBody:req.body});

     var model = _helper.getModel(req.params.model);

      try{
        var results = _helper.findOne(req.params.type,req.params.db,'findOne',model,req.body);
                         console.log(results);
         res.send({result:{responseBody:results}});
      }
      catch(err){
          throw new Error(err);
          res.send({error:err});
      }
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
 
