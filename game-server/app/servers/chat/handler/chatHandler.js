
const GameHandler = require('@sex-pomelo/sex-pomelo/base').GameHandler;

class ChatHandler extends GameHandler{

	constructor(app){
		super(app);
	}

	/**
	 * Send messages to users
	 *
	 * @param {Object} msg message from client
	 * @param {Object} session
	 * @param  {Function} next next stemp callback
	 *
	 */
	send(msg, session, next) {
		var rid = session.get('rid');
		var username = session.uid.split('*')[0];

		var channelService = this.app.get('channelService');
		var param = {
			msg: msg.content,
			from: username,
			target: msg.target
		};
		
		let channel = channelService.getChannel(rid, false);

		//the target is all users
		if(msg.target == '*') {
			channel.pushMessage('onChat', param);
		}
		//the target is specific user
		else {
			var tuid = msg.target + '*' + rid;
			var tsid = channel.getMember(tuid)['sid'];
			channelService.pushMessageByUids('onChat', param, [{
				uid: tuid,
				sid: tsid
			}]);
		}
		next(null, {
			route: msg.route
		});
	}

}

module.exports = function(app) {
	return new ChatHandler(app);
};


