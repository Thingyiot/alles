
function userPojo(userName,password,email,sshKey){ 
	this.userName=userName;
	this.password=password;
	this.email=email;
	this.sshKey=sshKey;
} 

var arc =null;

function Pojifier() {
  var userName = null;

  Object.defineProperty(this, 'userName', {
    get: function() {
      console.log('get userName ..');
      return userName;
    },
    set: function(value) {
      userName = value;
    }
  });

}
 
userPojo.prototype.create=function(){ 
      arc = new Pojifier();
      return arc;
} 

userPojo.prototype.set=function(key,value){ 
  if(key==='userName'){
		 arc.username=value;
	}
} 

userPojo.prototype.get=function(key){ 
	if(key==='userName'){
		return arc.username;
	}
    
} 

// Expose app
exports = module.exports = userPojo;