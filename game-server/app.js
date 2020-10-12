
const pomelo = require('@sex-pomelo/sex-pomelo');
const BaseApp = require('@sex-pomelo/sex-pomelo/base').BaseApp;

/** app.js user App helper class */
class MyApp extends BaseApp{
	constructor(){
		super( pomelo );
	}

	preLoadCfg(){
	}

	preStart(){
		const { app } = this;

		// app configure
		app.configure('production|development', function() {
			app.enable('systemMonitor');
		});
	}

	postStart() {

	}

};

new MyApp();
