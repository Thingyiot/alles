var documentMapper=require('../libs/database/odm/odm');
var relationalMapper=require('../libs/database/orm/orm');

var dev=require('../config/env/development');

function dbHelper(model){
 this.model=model;
}

dbHelper.prototype.create=function (dbType,database,action,model,json){
	if(dbType === 'document' && database === 'mongo'  && action === 'create' ){

	}
    else if(dbType === 'relational' &&  database === 'mysql' && action === 'create'){
         	var newRecord = {};
			newRecord.id= json.newRecord.id;
			newRecord.name = json.newRecord.name;

         try{
			model.create(newRecord, function(err, results) {
				if (err) throw err;
			    console.log('Succsessfully Inserted Record Into db' + database );
		   });
		}
		catch(err){
			console.log(err);
		}	
        
	}
}

 // Expose app
exports = module.exports =  dbHelper ;
