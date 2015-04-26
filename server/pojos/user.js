
function User(sshKey,userName,email){ 
	this.sshKey=sshKey;
  this.userName=this.userName;
  this.email=this.email;

  Object.defineProperty(this, 'sshKey', {
       get: function() {
          return sshKey;
        },
        set: function(value) {
          sshKey= value;
        }
      });

  Object.defineProperty(this, 'userName', {
       get: function() {
          return userName;
        },
        set: function(value) {
          name= userName;
        }
      });

   Object.defineProperty(this, 'email', {
       get: function() {
          return email;
        },
        set: function(value) {
          name= email;
        }
      });
} 

var arc =null;

User.prototype.init=function(){ 
      arc = new User();
} 

User.prototype.set=function(key,value){ 
  if(key==='sshKey'){
		 arc.sshKey=value;
	}
  if(key==='name'){
     arc.userName=value;
  }
  if(key==='email'){
     arc.email=value;
  }
   return arc;
} 

User.prototype.get=function(key){ 
	if(key==='sshKey'){
		return arc.sshKey;
	}
  if(key==='name'){
     return arc.userName;
  }
   if(key==='email'){
     return arc.email;
  }
} 

// Expose app
exports = module.exports = User;