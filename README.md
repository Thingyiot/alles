# Polyglot
Polyglot Persistance primer for Node Js Resful Services

##v0.0.0

###Support 

1) MongoDB

2) MySql


## Create a device 

URL :
 http://localhost:9000/relational/mysql/device/create

Action:
 Post

Request:

```

{
	"newRecord":{

		     "deviceUID":12231,
		     "deviceType":"String",
		     "deviceName" :"String",
		     "deviceBrand" :"String",
		     "deviceIP" :"String",
		     "deviceMAC" :"String",
		     "created" :"String"
		}
}


```

Response:

```
{
inserted: {
	requestBody: {
		newRecord: {
		deviceUID: 12231
		deviceType: "String"
		deviceName: "String"
		deviceBrand: "String"
		deviceIP: "String"
		deviceMAC: "String"
		created: "String"
		id: null
		}
	}
}

```

## Find a device 

URL :
 http://localhost:9000/relational/mysql/device/findone

Action:
 Post

Request:

```
{
	"query":{
	    "id":1
	}
}

```

Response:

```
{
	result: {
		responseBody: {
		deviceUID: 12231
		deviceType: "String"
		deviceName: "String"
		deviceBrand: "String"
		deviceIP: "String"
		deviceMAC: "String"
		created: "String"
		id: 1
		}
	}
}

```

