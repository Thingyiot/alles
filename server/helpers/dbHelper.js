var documentMapper=require('../libs/database/odm/odm');
var relationalMapper=require('../libs/database/orm/orm');
var mysql=new relationalMapper();	
var _ = require('lodash');
var x;

function dbHelper(model){
 this.model=model;
   
}

dbHelper.prototype.create=function (dbType,database,action,model,json,res){
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'create'){

         try{
			model.create(json.record, function(err, results) {
				if (err) throw err;
			    console.log('Succsessfully Inserted Record Into db' + database );
			     res.send({inserted:{record:json.record}});
		   });
		}
		catch(err){
			console.log(err);
		}	
        
	}
}

dbHelper.prototype.findOne=function (dbType,database,action,model,req,res){
	
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'findOne'){
	    var call= model.get(req.params.id, function(err, obj) {
	           res.send({result:obj});
		 });			
     }
     
}


dbHelper.prototype.findMany=function (dbType,database,action,model,req,res){
	
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'findMany'){
      model.find(req.params, function(err, obj) {
		  res.send({result:obj});
	  });				
     }
     
}

dbHelper.prototype.del=function (dbType,database,action,model,req,res){
	
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'delete'){
	   	model.find(req.params.id).remove(function (err) {
            res.send({result:"Delete Successful!"});
        });
     }
     
}

dbHelper.prototype.count=function (dbType,database,action,model,req,res){
	
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'count'){
         model.find().count(function (err, count) {
 		    res.send({result:count});
		});	
     }
     
}


dbHelper.prototype.getModel=function(modelName){
	if(modelName === 'device'){
		return mysql.getModel('device');
	}
}


 // Expose app
exports = module.exports =  dbHelper ;
