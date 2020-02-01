"use strict";

const BaseFilter = require('@sex-pomelo/sex-pomelo/base').BaseFilter;


class AbuseFilter extends BaseFilter{
  before (msg, session, next) {
    if (msg.content.indexOf('fuck') !== -1) {
      session.__abuse__ = true;
      msg.content = msg.content.replace('fuck', '****');
    }
    
    next();
  }
  
  /** @override  */
  after (err, msg, session, resp, next) {
    if (session.__abuse__) {
      var user_info = session.uid.split('*');
      console.log('abuse:' + user_info[0] + " at room " + user_info[1]);
    }
    
    next(err);
  }

}


module.exports = function() {
  return new AbuseFilter();
}


