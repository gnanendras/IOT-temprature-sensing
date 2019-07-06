
 var Basetemperature=0;
 var Basehumidity=0;
 var databaseURL= 'https://first-project-c6fd1.firebaseio.com/';
 var projectId='first-project-c6fd1'
var connectionstring=require('./lib/Connectionstring_Handler');
var Messgehandler=require('./lib/messagecontract');
var logger=require('./lib/loghandler');
const log = logger.getLogger('log');
var storagehandler=require('./lib/storagehandler');

var database= new  storagehandler();
database.create();

log.info('service started');

var app= new connectionstring().connectionhelper(databaseURL,projectId);
 var ref = app.database().ref('/tempearature');
 function sendmessage(){
    log.error('simulation started');
     var temperature= Basetemperature +(Math.random()*15);
     var humdity= Basehumidity +(Math.random()*15);
      var json=new Messgehandler().messagehelper(temperature,humdity,projectId);
      database.insert(json);
      console.log(json)
     var response= ref.push(json);
    
 }
 log.info('simulation started');
 setInterval(sendmessage,1000)
 