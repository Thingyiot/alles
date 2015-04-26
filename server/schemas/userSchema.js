var user={
     name: String,
     email: {
       type: String
     },
     role: {
      type: String,
      default: 'user'
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