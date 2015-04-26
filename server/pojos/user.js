
function User(sshKey){ 
	this.sshKey=sshKey;

  Object.defineProperty(this, 'sshKey', {
       get: function() {
          console.log('get userName ..');
          return sshKey;
        },
        set: function(value) {
          sshKey= value;
        }
      });
} 

var arc =null;

User.prototype.init=function(){ 
      arc = new User();
      return arc;
} 

User.prototype.set=function(key,value){ 
  if(key==='sshKey'){
		 arc.sshKey=value;
	}
} 

User.prototype.get=function(key){ 
	if(key==='sshKey'){
		return arc.sshKey;
	}
    
} 

// Expose app
exports = module.exports = User;