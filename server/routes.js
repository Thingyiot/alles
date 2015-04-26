module.exports = function(app) {

   var mongoose = require('mongoose');
   var user = require('./controllers/user');
   var config = require('./config/config');
   var smockito=require(config.build.mocker);
   var stub=new smockito("user");
       
 
		app.get(config.build.routes.api.user.stub.get, function (req, res, next) {
		  res.send(stub.getStubs()[0].value.user);
		});
         
        app.get('/show/user', user.show);   
        app.get('/get/user/:username', user.getUserByName);  
        app.post('/update/user/', user.updateUserByName);
	    	app.post('/create/user', user.create);  


}