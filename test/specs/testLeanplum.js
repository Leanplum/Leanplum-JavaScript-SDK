const sinon = require('sinon');
const sleep = require('sleep');

const APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs';
const KEY_DEV = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY';
const KEY_PROD = 'prod_A1c7DfHO6XTo2BRwzhkkXKFJ6oaPtoMnRA9xpPSlx74';

const startResponse = require('./responses/start.json');
const successResponse = require('./responses/success.json');
const LEANPLUM_PATH = '../../dist/leanplum';

// const mockWebSocket = require('mock-socket').WebSocket;
// global.WebSocket = mockWebSocket;
global.WebSocket = undefined;

// Mocking Requests
let xhr;

// Test data
const userId = (Math.random() * 100000000).toFixed(0);
const userAttributes = {
	gender: 'female',
	age: 27,
};

let Leanplum = require(LEANPLUM_PATH);

/**
 * Extracts the leanplum action type from a request.
 * @param  {Object} request The request payload.
 * @return {String} The action name.
 */
function getAction(request) {
	let requestBody = JSON.parse(request.requestBody);
	let action = requestBody.data[0].action;
	return action;
};

/**
 * Intercept the next request.
 * @param  {Function} callback The callback to be called on interception.
 */
function interceptRequest(callback) {
	xhr = sinon.useFakeXMLHttpRequest();
	xhr.onCreate = function(req) {
		// Wait for request to populate correctly.
		setTimeout(function() {
			callback(req);
		}, 0);
	};
};

/**
 * Sets the app id based on the provided mode.
 * @param {String} mode The Leanplum mode.
 */
function setAppId(mode) {
	if (mode === testModes.DEV) {
		Leanplum.setAppIdForDevelopmentMode(APP_ID, KEY_PROD);
	} else {
		Leanplum.setAppIdForProductionMode(APP_ID, KEY_DEV);
	}
};

const testModes = {
	PROD: 0,
	DEV: 1,
};

Object.keys(testModes).forEach((mode) => {
	describe(mode + ' mode:', () => {
		describe('Test start methods.', () => {
			before(() => {});

			after(() => {
				xhr.restore();
			});

			beforeEach(() => {
				Leanplum = require(LEANPLUM_PATH);
				setAppId(testModes[mode]);
			});

			afterEach(() => {
				requests = [];
				assert.equal(requests.length, 0);
				delete require.cache[require.resolve(LEANPLUM_PATH)];
			});

			it('start', (done) => {
				interceptRequest((request) => {
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(startResponse));
				});
				Leanplum.start(userId, userAttributes, (success) => {
					assert.equal(success, true);
					return done(success ? null : success);
				});
			});

			it('startFromCache', (done) => {
				Leanplum.startFromCache(userId, userAttributes, (success) => {
					assert.equal(success, true);
					return done(success ? null : success);
				});
			});

			it('stop', () => {
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'stop');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
				});
				Leanplum.stop();
			});
		});

		describe('Test action methods.', () => {
			before((done) => {
				Leanplum = require(LEANPLUM_PATH);
				interceptRequest((request) => {
					assert.isNotNull(request);
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(startResponse));
				});
				setAppId(testModes[mode]);
				Leanplum.start(userId, userAttributes, (success) => {
					assert.equal(success, true);
					requests = [];
					return done(success ? null : success);
				});
			});

			after(() => {
				xhr.restore();
				delete require.cache[require.resolve(LEANPLUM_PATH)];
			});

			beforeEach(() => {});

			afterEach(() => {
				requests = [];
			});

			it('pauseSession', (done) => {
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'pauseSession');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.pauseSession();
			});

			it('resumeSession', (done) => {
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'resumeSession');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.resumeSession();
			});

			it('pauseState', (done) => {
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'pauseState');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.pauseState();
			});

			it('resumeState', (done) => {
				sleep.sleep((testModes[mode] === testModes.PROD) ? 5 : 0);
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'resumeState');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.resumeState();
			}).timeout(7000);

			it('setUserAttributes', (done) => {
				sleep.sleep((testModes[mode] === testModes.PROD) ? 5 : 0);
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'setUserAttributes');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.setUserAttributes(userId, userAttributes);
			}).timeout(7000);

			it('track', (done) => {
				sleep.sleep((testModes[mode] === testModes.PROD) ? 5 : 0);
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'track');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.track();
			}).timeout(7000);

			it('advanceTo', (done) => {
				sleep.sleep((testModes[mode] === testModes.PROD) ? 5 : 0);
				interceptRequest((request) => {
					assert.isNotNull(request);
					assert.equal(getAction(request), 'advance');
					request.respond(200, {
						'Content-Type': 'application/json',
					}, JSON.stringify(successResponse));
					done();
				});
				Leanplum.advanceTo();
			}).timeout(7000);
		});
	});
});
