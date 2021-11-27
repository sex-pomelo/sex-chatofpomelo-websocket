var dispatcher = require('../../../util/dispatcher');

const GameHandler = require('@sex-pomelo/sex-pomelo/base').GameHandler;

class GateHandler extends GameHandler{
	constructor(app){
		super(app);

		// test i18n
		let msgT = this.app.tr("Hello","It falls on field and tree");
		let msgT1 = this.app.tr1("zh-CN","Hello","千军万马来相见！","-无");
		console.log('--tr test:',msgT);
		console.log('--tr test:',msgT1);
	}

	/**
	 * Gate handler that dispatch user to connectors.
	 *
	 * @param {Object} msg message from client
	 * @param {Object} session
	 * @param {Function} next next stemp callback
	 *
	 */
	queryEntry (msg, session, next) {
		let uid = msg.uid;
		if(!uid) {
			next(null, {
				code: 500
			});
			return;
		}
		// get all connectors
		let connectors = this.app.getServersByType('connector');
		if(!connectors || connectors.length === 0) {
			next(null, {
				code: 500
			});
			return;
		}
		// select connector
		let res = dispatcher.dispatch(uid, connectors);
		next(null, {
			code: 200,
			host: res.host,
			port: res.clientPort
		});
	};

}


module.exports = function(app) {
	return new GateHandler(app);
};


