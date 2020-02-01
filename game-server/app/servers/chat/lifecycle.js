'use strict';

const {Lifecycle,Application} = require('@sex-pomelo/sex-pomelo/base');

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const logger = require('@sex-pomelo/sex-pomelo-logger').getLogger('chat-log');


class ChatLifeCycle extends Lifecycle{

  /**
   * 
   * @param {Application} app 
   * @param {Function} cb 
   */
  static beforeStartup (app, cb) {
    console.log( 'ChatLifeCycle::beforeStartup : ',app.getServerId() );
    // do some operations after application start up
    cb();
  }
  
  /**
   * 
   * @param {Application} app 
   * @param {Function} cb 
   */
  static afterStartup (app, cb) {
    console.log( 'ChatLifeCycle::afterStartup : ',app.getServerId()  );
    // do some operations after application start up
    cb();
  }
  
  /**
   * 
   * @param {Application} app 
   * @param {Function} cb 
   */
  static beforeShutdown(app, cb) {
  
    console.log( 'ChatLifeCycle::beforeShutdown : ',app.getServerId()  );
      // do some operations after application start up
      cb();
  }
  
  /**
   * 
   * @param {Application} app 
   */
  static afterStartAll(app) {
    console.log( 'ChatLifeCycle::afterStartAll : ',app.getServerId()  );
    // do some operations after all applications start up
  }

}

//
const { beforeStartup,afterStartup,beforeShutdown,afterStartAll } = ChatLifeCycle;
module.exports = {beforeStartup,afterStartup,beforeShutdown,afterStartAll};