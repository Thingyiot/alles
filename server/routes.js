module.exports = function(app) {
   var smockito=require('./stubs');
   var stub=new smockito("user");

app.get('/api/user/stub', function (req, res, next) {
  res.send(stub.getStubs()[0].value.user);
});

}