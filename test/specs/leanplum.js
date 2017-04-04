const Leanplum = require('../../lib/leanplum').Leanplum;

const APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs';
// const KEY_DEV = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY';
const KEY_PROD = 'prod_A1c7DfHO6XTo2BRwzhkkXKFJ6oaPtoMnRA9xpPSlx74';

describe('Test Leanplum methods.', () => {
	before(() => {
		// Leanplum.setAppIdForDevelopmentMode(APP_ID, KEY_DEV);
		Leanplum.setAppIdForProductionMode(APP_ID, KEY_PROD);
	});
	it('setApiPath', () => {
		Leanplum.setApiPath();
	});
	it('setEmail', () => {
		Leanplum.setEmail();
	});
	it('setUpdateCheckingEnabledInDevelopmentMode', () => {
		Leanplum.setUpdateCheckingEnabledInDevelopmentMode();
	});
	it('setNetworkTimeout', () => {
		Leanplum.setNetworkTimeout();
	});
	it('setSocketHost', () => {
		Leanplum.setSocketHost();
	});
	it('setDeviceId', () => {
		Leanplum.setDeviceId();
	});
	it('setAppVersion', () => {
		Leanplum.setAppVersion();
	});
	it('setDeviceName', () => {
		Leanplum.setDeviceName();
	});
	it('setDeviceModel', () => {
		Leanplum.setDeviceModel();
	});
	it('setSystemName', () => {
		Leanplum.setSystemName();
	});
	it('setSystemVersion', () => {
		Leanplum.setSystemVersion();
	});
	it('setVariables', () => {
		Leanplum.setVariables();
	});
	it('setRequestBatching', () => {
		Leanplum.setRequestBatching();
	});
	it('getVariables', () => {
		Leanplum.getVariables();
	});
	it('getVariable', () => {
		Leanplum.getVariable();
	});
	it('getVariants', () => {
		Leanplum.getVariants();
	});
	it('addStartResponseHandler', () => {
		Leanplum.addStartResponseHandler();
	});
	it('addVariablesChangedHandler', () => {
		Leanplum.addVariablesChangedHandler();
	});
	it('removeStartResponseHandler', () => {
		Leanplum.removeStartResponseHandler();
	});
	it('removeVariablesChangedHandler', () => {
		Leanplum.removeVariablesChangedHandler();
	});
	it('start', (done) => {
		let userId = (Math.random() * 100000000).toFixed(0);
		let userAttributes = {
			gender: 'female',
			age: 27,
		};
		Leanplum.start(userId, userAttributes, done);
	});
	it('startFromCache', () => {
		Leanplum.startFromCache();
	});
	it('stop', () => {
		Leanplum.stop();
	});
	it('pauseSession', () => {
		Leanplum.pauseSession();
	});
	it('resumeSession', () => {
		Leanplum.resumeSession();
	});
	it('pauseState', () => {
		Leanplum.pauseState();
	});
	it('resumeState', () => {
		Leanplum.resumeState();
	});
	it('setUserId', () => {
		Leanplum.setUserId();
	});
	it('setUserAttributes', () => {
		Leanplum.setUserAttributes();
	});
	it('track', () => {
		Leanplum.track();
	});
	it('advanceTo', () => {
		Leanplum.advanceTo();
	});
});
