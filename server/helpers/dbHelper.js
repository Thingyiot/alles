var documentMapper=require('../libs/database/odm/odm');
var relationalMapper=require('../libs/database/orm/orm');
var mysql=new relationalMapper();	

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

dbHelper.prototype.getModel=function(modelName){
	if(modelName === 'device'){
		return mysql.getModel('device');
	}
}


 // Expose app
exports = module.exports =  dbHelper ;
