const Leanplum = require('../../lib/leanplum').Leanplum;

describe('Init', function() {
	it('setAppIdForDevelopmentMode', function() {
		Leanplum.setAppIdForDevelopmentMode('app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs',
			'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY');
	});
});
