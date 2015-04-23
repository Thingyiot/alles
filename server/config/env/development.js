'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://appContracts:!2014*TuRner!@ds027749.mongolab.com:27749/contracts-dev'
  },
  redis: {
  	server: '',
  	secretKey: 'SeekQret',
  	prefix: 'sess-dev',
  	port: 6383,
  	db: 0
  }
};
