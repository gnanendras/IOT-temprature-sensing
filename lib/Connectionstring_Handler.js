'use strict';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
var logger=require('./loghandler');
const log = logger.getLogger('log');
class ConnectionStirng  {

  connectionhelper (databaseURL,projectid) {
      
      if(databaseURL.includes("firebaseio")){
        var app = firebase.initializeApp({    
            databaseURL:databaseURL,
            projectId: projectid,
         });
         log.info("connection established")
    }
    return app;
}
}
module.exports=ConnectionStirng;
