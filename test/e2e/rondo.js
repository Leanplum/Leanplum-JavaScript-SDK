$("#registerForWebPush")
    .click(() => Leanplum.registerForWebPush());

$("#start")
    .click(() => Leanplum.start());

$("#forceContentUpdate")
    .click(() => Leanplum.forceContentUpdate());

$("#sdkVersion").text(Leanplum.VERSION);
