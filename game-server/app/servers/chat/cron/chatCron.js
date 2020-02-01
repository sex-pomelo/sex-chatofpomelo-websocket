"use strict";

const BaseCron = require('@sex-pomelo/sex-pomelo/base').Cron;


class ChatCron extends BaseCron{

  constructor(app){
    super(app);
  }

  test() {
    console.log(`-- sche ${Date.now()} [${this.app.getServerId()}]`);
  }
}

module.exports = function(app) {
  return new ChatCron(app);
};



