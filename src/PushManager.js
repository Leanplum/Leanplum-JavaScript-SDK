const FCM_URL = 'https://android.googleapis.com/gcm/send/';

let isSubscribed = false;
let serviceWorkerRegistration = null;
let onWebPushRegisterCallback = undefined;
let self;
let _leanplum;

class PushManager {
  constructor(leanplum) {
    _leanplum = leanplum;
    self = this;
    if (navigator && navigator.serviceWorker &&
      'serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported.');

      navigator.serviceWorker.register('/sw.min.js')
        .then(function(registration) {
          console.log('Leanplum: Service Worker is registered.');
          serviceWorkerRegistration = registration;

          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription()
            .then(function(subscription) {
              isSubscribed = !(subscription === null);

              self._updateSubscriptionOnServer(subscription);

              if (isSubscribed) {
                console.log('User IS subscribed.');
              } else {
                console.log('User is NOT subscribed.');
              }

              if (onWebPushRegisterCallback) {
                onWebPushRegisterCallback(isSubscribed);
              }
            });
        })
        .catch(function(error) {
          console.log('Service Worker Error', error);
        });
    } else {
      console.log('Leanplum: Push messaging is not supported');
    }
  }

  isWebPushSupported() {
    return (serviceWorkerRegistration !== undefined) ? true : false;
  }

  addOnWebPushRegister(cb) {
    onWebPushRegisterCallback = cb;
    return true;
  }

  subscribeUser() {
    serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
      })
      .then(function(subscription) {
        console.log('User is subscribed.');

        self._updateSubscriptionOnServer(subscription);

        isSubscribed = true;

        if (onWebPushRegisterCallback) {
          onWebPushRegisterCallback(isSubscribed);
        }
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
      });
  }

  unsubscribeUser() {
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription.unsubscribe();
        }
      })
      .catch(function(error) {
        console.log('Error unsubscribing', error);
      })
      .then(function() {
        self._updateSubscriptionOnServer(null);

        console.log('User is unsubscribed.');
        isSubscribed = false;

        if (onWebPushRegisterCallback) {
          onWebPushRegisterCallback(isSubscribed);
        }
      });
  }

  _updateSubscriptionOnServer(subscription) {
    console.dir(JSON.stringify(subscription, null, 2));
    let registrationId = self._extractRegistrationId(subscription);
    if (registrationId) {
      _leanplum.setRegistrationId(registrationId);
    }
  }

  _extractRegistrationId(subscription) {
    if (subscription && subscription.endpoint &&
      subscription.endpoint.length) {
      return subscription.endpoint.replace(FCM_URL, '');
    }
    return null;
  }
}

module.exports = PushManager;
