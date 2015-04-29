
function Device(deviceUID, deviceType, deviceName,deviceIP, deviceMAC, created){ 

  this.deviceUID=deviceUID;
  this.deviceType=deviceType;
  this.deviceName=deviceName;
  this.deviceIP=deviceIP;
  this.deviceMAC=deviceMAC;
  this.created=created;

  Object.defineProperty(this, 'deviceUID', {
       get: function() {
          return deviceUID;
        },
        set: function(value) {
          deviceUID= value;
        }
      });

  Object.defineProperty(this, 'deviceType', {
       get: function() {
          return deviceType;
        },
        set: function(value) {
          deviceType= value;
        }
      });

   Object.defineProperty(this, 'deviceName', {
       get: function() {
          return deviceName;
        },
        set: function(value) {
          deviceName= email;
        }
      });

    Object.defineProperty(this, 'deviceIP', {
       get: function() {
          return deviceIP;
        },
        set: function(value) {
          deviceIP= value;
        }
      });


    Object.defineProperty(this, 'deviceMAC', {
       get: function() {
          return deviceMAC;
        },
        set: function(value) {
          deviceMAC = value;
        }
      });

    Object.defineProperty(this, 'created', {
       get: function() {
          return created;
        },
        set: function(value) {
          created = value;
        }
      });

} 

var arc =null;

Device.prototype.init=function(){ 
      arc = new User();
} 

Device.prototype.set=function(key,value){ 
  if(key==='deviceUID'){
		 arc.deviceUID=value;
	}
  if(key==='deviceType'){
     arc.deviceType=value;
  }
  if(key==='deviceName'){
     arc.deviceName=value;
  }
  if(key==='deviceIP'){
     arc.deviceIP=value;
  }
  if(key==='deviceMAC'){
     arc.deviceMAC=value;
  }
  if(key==='created'){
     arc.created=value;
  }
} 

Device.prototype.get=function(){ 
     return arc;
} 

// Expose app
exports = module.exports = Device;