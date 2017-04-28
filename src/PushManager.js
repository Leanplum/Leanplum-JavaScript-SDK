import _ from './underscore';
import Constants from './Constants';

const APPLICATION_SERVER_PUBLIC_KEY =
  'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' +
  'nfCt-3vK0Ci68';

let self;
let _leanplum;
let isSupported = false;
let isSubscribed = false;
let serviceWorkerRegistration = null;

/**
 * Push Manager handles the registration and subscription for web push.
 */
class PushManager {
  /**
   * Creates a new PushManager object.
   * @param  {[type]} leanplum Reference to the main class to
   *                           avoid circle import.
   */
  constructor(leanplum) {
    _leanplum = leanplum;
    self = this;
    if (navigator && navigator.serviceWorker &&
      'serviceWorker' in navigator && 'PushManager' in window) {
      isSupported = true;
      self.register();
    }
  }

  /**
   * Whether or not web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  isWebPushSupported() {
    return isSupported;
  }

  /**
   * Whether or not the browser is subscribed to web push notifications.
   * @return {Boolean} True if subscribed, else false.
   */
  isWebPushSubscribed() {
    if (!isSupported) {
      return new Promise((resolve, reject) => {
        reject('Leanplum: Push messaging is not supported.');
      });
    }
    return this._getServiceWorkerRegistration()
      .then((registration) => {
        return new Promise((resolve) => {
          if (!registration) {
            resolve(false);
          } else {
            registration.pushManager.getSubscription()
              .then(function(subscription) {
                isSubscribed = !(subscription === null);
                if (isSubscribed) {
                  self._updateNewSubscriptionOnServer(subscription);
                }
                resolve(isSubscribed);
              });
          }
        });
      });
  }

  /**
   * Register for webpush.
   * @param  {String}   serviceWorkerUrl The url that serves the serviceworker
   *                                     on your domain.
   * @param  {Function} callback         The callback to be called with result.
   */
  register(serviceWorkerUrl, callback) {
    if (!isSupported) {
      console.log('Leanplum: Push messaging is not supported.');
      callback(false);
    }
    navigator.serviceWorker.register(
        serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js')
      .then(function(registration) {
        serviceWorkerRegistration = registration;

        // Set the initial subscription value
        serviceWorkerRegistration.pushManager.getSubscription()
          .then(function(subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {
              self._updateNewSubscriptionOnServer(subscription);
            }
            if (callback) {
              callback(isSubscribed);
            }
          });
      })
      .catch(function(error) {
        console.log('Leanplum: Service Worker Error: ', error);
      });
  }

  /**
   * Subscribe the user(browser) to push.
   * @return {Promise} Resolves if subscription successful, otherwise rejects.
   */
  subscribeUser() {
    const applicationServerKey =
      this._urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
    return new Promise((resolve, reject) => {
      return serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey,
        })
        .then(function(subscription) {
          if (subscription) {
            self._updateNewSubscriptionOnServer(subscription);
            isSubscribed = true;
            return resolve(isSubscribed);
          }
          isSubscribed = false;
          return reject();
        })
        .catch(function(err) {
          return reject('Leanplum: Failed to subscribe the user: ' + err);
        });
    });
  }

  /**
   * Unsubscribe the user(browser) from push.
   * @return {Promise} Resolves if unsubscribed, otherwise rejects.
   */
  unsubscribeUser() {
    return new Promise((resolve, reject) => {
      serviceWorkerRegistration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.unsubscribe();
          }
          return reject();
        })
        .catch(function(error) {
          reject('Leanplum: Error unsubscribing: ' + error);
        })
        .then(function(success) {
          if (success) {
            isSubscribed = false;
            return resolve();
          }
          return reject();
        });
    });
  }

  /**
   * Retrieves the service worker registration object from browser.
   * @return {ServiceWorkerRegistration} Returns the registration or null.
   */
  _getServiceWorkerRegistration() {
    return new Promise((resolve) => {
      if (serviceWorkerRegistration) {
        resolve(serviceWorkerRegistration);
      } else {
        navigator.serviceWorker.getRegistration().then((registration) => {
          resolve(registration);
        });
      }
    });
  }

  /**
   * Encodes a base64 url string to an uint8arrary.
   * @param  {[type]} base64String [description]
   * @return {[type]}              [description]
   */
  _urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  /**
   * [_prepareSubscription description]
   * @param  {[type]} subscription [description]
   * @return {[type]}              [description]
   */
  _prepareSubscription(subscription) {
    let key = subscription.getKey ? subscription.getKey('p256dh') : '';
    let auth = subscription.getKey ? subscription.getKey('auth') : '';
    let keyAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
    let authAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
    return {
      endpoint: subscription.endpoint,
      key: keyAscii,
      auth: authAscii,
    };
  }

  /**
   * Send a new subscription object to the Leanplum server.
   * @param  {[type]} subscription The subscription.
   */
  _updateNewSubscriptionOnServer(subscription) {
    if (subscription) {
      let preparedSubscription = this._prepareSubscription(subscription);
      let preparedSubscriptionString = JSON.stringify(preparedSubscription);
      let existingSubscriptionString = _leanplum._getFromLocalStorage(
        Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION);
      if (!_.isEqual(existingSubscriptionString, preparedSubscriptionString)) {
        _leanplum._saveToLocalStorage(Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION,
          preparedSubscriptionString);
        _leanplum._setSubscription(preparedSubscriptionString);
      }
    }
  }
}

export default PushManager;
