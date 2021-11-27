module.exports = appInfo => {
  const config ={
    name: 'chatofpomelo-websocket',
    connectorConfig:{
      connectors: 'hybridconnector',
      // transports:{
      //   "close timeout" :30,
      //   "heartbeat interval" : 10,
      //   "heartbeat timeout" : 30
      // },
      //heartbeat : 30,
      //timeout   : 60,
      useDict: true,
      disconnectOnTimeout: true
    },
    plugins: [],
    // configs: [
    //   {name: 'mssqlcfg', cfg:'mssql.json', serverType: '!master'},
    //   {name: 'rediscfg', cfg:'redis.json', serverType: '!master'},
    // ],
    components: [
      {
        name: '__i18n__',
        serverType: 'gate',
        cfg: { 
            path: 'app/locale',
            locale: ["en-US","zh-CN"],
            default: "en-US",
            localeFiledName: 'lang'
        }
      },
    ],
    filters:[
      {
        package: 'app/servers/chat/filter/abuseFilter',
        serverType: 'chat',
        argv: ['ssss']
      },
      {
        package: 'timeout',
        serverType: '!master',
        argv: [3000,500]
      }
    ],
    route:{
      cfg: 'route.json',
      serverType: 'connector',
      checkInterval: 10000,
      routeFunc: {
        nor: 'app/util/routeUtil'
      }
    }
  };


  return { ... config};

};