const Leanplum = require('../../lib/leanplum').Leanplum;

describe('Test Leanplum methods.', function() {
	it('setAppIdForDevelopmentMode', function() {
		Leanplum.setAppIdForDevelopmentMode('app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs',
			'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY');
	});
	it('setAppIdForProductionMode', function() {
		Leanplum.setAppIdForProductionMode();
	});
	it('setApiPath', function() {
		Leanplum.setApiPath();
	});
	it('setEmail', function() {
		Leanplum.setEmail();
	});
	it('setUpdateCheckingEnabledInDevelopmentMode', function() {
		Leanplum.setUpdateCheckingEnabledInDevelopmentMode();
	});
	it('setNetworkTimeout', function() {
		Leanplum.setNetworkTimeout();
	});
	it('setSocketHost', function() {
		Leanplum.setSocketHost();
	});
	it('setDeviceId', function() {
		Leanplum.setDeviceId();
	});
	it('setAppVersion', function() {
		Leanplum.setAppVersion();
	});
	it('setDeviceName', function() {
		Leanplum.setDeviceName();
	});
	it('setDeviceModel', function() {
		Leanplum.setDeviceModel();
	});
	it('setSystemName', function() {
		Leanplum.setSystemName();
	});
	it('setSystemVersion', function() {
		Leanplum.setSystemVersion();
	});
	it('setVariables', function() {
		Leanplum.setVariables();
	});
	it('setRequestBatching', function() {
		Leanplum.setRequestBatching();
	});
	it('getVariables', function() {
		Leanplum.getVariables();
	});
	it('getVariable', function() {
		Leanplum.getVariable();
	});
	it('getVariants', function() {
		Leanplum.getVariants();
	});
	it('addStartResponseHandler', function() {
		Leanplum.addStartResponseHandler();
	});
	it('addVariablesChangedHandler', function() {
		Leanplum.addVariablesChangedHandler();
	});
	it('removeStartResponseHandler', function() {
		Leanplum.removeStartResponseHandler();
	});
	it('removeVariablesChangedHandler', function() {
		Leanplum.removeVariablesChangedHandler();
	});
	it('start', function() {
		Leanplum.start();
	});
	it('startFromCache', function() {
		Leanplum.startFromCache();
	});
	it('stop', function() {
		Leanplum.stop();
	});
	it('pauseSession', function() {
		Leanplum.pauseSession();
	});
	it('resumeSession', function() {
		Leanplum.resumeSession();
	});
	it('pauseState', function() {
		Leanplum.pauseState();
	});
	it('resumeState', function() {
		Leanplum.resumeState();
	});
	it('setUserId', function() {
		Leanplum.setUserId();
	});
	it('setUserAttributes', function() {
		Leanplum.setUserAttributes();
	});
	it('track', function() {
		Leanplum.track();
	});
	it('advanceTo', function() {
		Leanplum.advanceTo();
	});
});
