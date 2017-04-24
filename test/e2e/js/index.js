(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.indexEs6 = mod.exports;
  }
})(this, function () {
  'use strict';

  var REMOTE_APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs';
  var REMOTE_KEY = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY';

  Leanplum.setAppIdForDevelopmentMode(REMOTE_APP_ID, REMOTE_KEY);
  Leanplum.start();
  Leanplum.addStartResponseHandler(function () {
    console.log('My variants:');
    console.log(Leanplum.getVariants());
  });
  setTimeout(function () {
    Leanplum.setUserAttributes('u1', {
      'Gender': 'Male',
      'Age': 24
    });
    Leanplum.advanceTo('Level 1', undefined, {
      'coins': 100
    });
  }, 15000);
});
//# sourceMappingURL=index.js.map
