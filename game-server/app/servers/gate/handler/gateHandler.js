var dispatcher = require('../../../util/dispatcher');

const GameHandler = require('@sex-pomelo/sex-pomelo/base').GameHandler;

class GateHandler extends GameHandler{
	constructor(app){
		super(app);
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


