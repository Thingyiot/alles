module.exports = function(app) {

   var mongoose = require('mongoose');
   var dbController = require('./controllers/dbController');
   var config = require('./config/config');
   var smockito=require(config.build.mocker);
   var stub=new smockito("user");
       
		app.get(config.build.routes.api.user.stub.get, function (req, res, next) {
		  res.send(stub.getStubs()[0].value.user);
		});
         
         app.post('/:type/:db/:model/create', dbController.create);

}