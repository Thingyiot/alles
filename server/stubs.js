var user= require('./stubs/user.json');

function stub(name){ 
	this.name=name;
	this.stubs=[];
} 

stub.prototype.getStubs=function(){ 
	if(this.name=='user'){
	    this.stubs.push({key:this.name,value:user});
    }
	return this.stubs;
} 


// Expose app
exports = module.exports = stub;