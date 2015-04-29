var documentMapper=require('../libs/database/odm/odm');
var relationalMapper=require('../libs/database/orm/orm');
var mysql=new relationalMapper();	
var _ = require('lodash');

function dbHelper(model){
 this.model=model;
}

dbHelper.prototype.create=function (dbType,database,action,model,json){
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'create'){

         try{
			model.create(json.newRecord, function(err, results) {
				if (err) throw err;
			    console.log('Succsessfully Inserted Record Into db' + database );
		   });
		}
		catch(err){
			console.log(err);
		}	
        
	}
}

dbHelper.prototype.findOne=function (dbType,database,action,model,json){
	var transformedResults ;
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'findOne'){
			model.find({"id":1}, function (err, results) {
               if (err) throw err;
                transformedResults = transform(results);   
               
        	 }); 

			     return  transformedResults;
     }


}

function transform(results){

var res = [];
var reformattedArray;

_.forEach(results, function(resultVal, resultKey) {
	 _.forEach(resultVal, function(val,key) {	
         res.push({ key : key  , value: val});
	});
});

reformattedArray = res.map(function(obj){ 
	 var rObj = {};
	 rObj[obj.key] = obj.value;
	 return rObj;
});

	return reformattedArray ;
}

dbHelper.prototype.getModel=function(modelName){
	if(modelName === 'device'){
		return mysql.getModel('device');
	}
}


 // Expose app
exports = module.exports =  dbHelper ;
