var user={
     displayName:String;
     name: String,
     email: {
       type: String
     },
     published: {
       type: String
     },
     updated: {
       type: String
     },
     hashedPassword: String,
     salt: String
}


function userSchema(){
	this.schema={};
}

userSchema.prototype.get=function(){
	this.schema=user;
	return this.schema;
}


// Expose app
exports = module.exports = userSchema;