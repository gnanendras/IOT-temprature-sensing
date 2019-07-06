'use strict';
const uuidv4 = require('uuid/v4');
var logger=require('./loghandler');
const log = logger.getLogger('log');
class MessgeContract  {

 messagehelper(templearture,humidity,projectId){
     let josn={templearture:templearture,humidity:humidity }
     let  messagecontrct={}
     messagecontrct.data = JSON.stringify(josn);
     messagecontrct.messageId =uuidv4() ;
     messagecontrct.userId = projectId;
     messagecontrct.datetime = new Date().toISOString();     
     log.info("message framed:" + JSON.stringify(messagecontrct));
        return messagecontrct
 }

}
module.exports=MessgeContract;
