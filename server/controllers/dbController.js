'use strict';

   var helper=require('../helpers/dbHelper'); 
   var _helper=new helper();

  var controller={};

  
 controller.create= function(req, res) {
     console.log({params:req.params});
     console.log({requestBody:req.body});
     var model = _helper.getModel(req.params.model);
      try{
         _helper.create(req.params.type,req.params.db,'create',model,req.body,res);
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
        var result = _helper.findOne(req.params.type,req.params.db,'findOne',model,req.body,res);
      }
      catch(err){
          throw new Error(err);
          res.send({error:err});
      }
  };

  controller.findMany=function(req, res) {
     console.log({params:req.params});
     console.log({requestBody:req.body});

     var model = _helper.getModel(req.params.model);

      try{
        var result = _helper.findMany(req.params.type,req.params.db,'findMany',model,req.body,res);
      }
      catch(err){
          throw new Error(err);
          res.send({error:err});
      }
  };

 controller.updateUserByName=function(req, res) {

 }

 controller.deleteUser=function(req, res) {

 }

controller.count=function(req, res) {

 }
 
 // Expose app
exports = module.exports =  controller ;
 
