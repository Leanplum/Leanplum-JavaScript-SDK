const isProdKey = (accessKey) => /^prod_/.test(accessKey);
var refreshConfig = () => {
    const appId = $('#appId').val();
    const accessKey = $('#accessKey').val();
    const apiPath = $('#apiPath').val();

    if (appId && accessKey) {
        if (isProdKey(accessKey)) {
            Leanplum.setAppIdForProductionMode(appId, accessKey);
        } else {
            Leanplum.setAppIdForDevelopmentMode(appId, accessKey);
        }
    }

    if (apiPath) {
        Leanplum.setApiPath(apiPath);
    }
};
$(".lp-config").on("change", refreshConfig);
refreshConfig();

$("#registerForWebPush")
    .click(() => Leanplum.registerForWebPush());

// TODO: userId, userAttributes
$("#start")
    .click(() => Leanplum.start());

$("#forceContentUpdate")
    .click(() => Leanplum.forceContentUpdate());

$("[data-action=track]")
    .submit(() => {
        const event = $("#eventName").val();
        const key = $("#eventKey").val();
        const value = $("#eventValue").val();

        if (key && value) {
            const params = {};
            params[key] = value;
            Leanplum.track(event, params);
        } else {
            Leanplum.track(event);
        }
    });

$("[data-action=state]")
    .submit(() => {
        const state = $("#stateName").val();
        Leanplum.advanceToState(state);
    });

$("#sdkVersion").text(Leanplum.VERSION);

// populate initial info
$("#isWebPushSupported").text(Leanplum.isWebPushSupported() ? "Yes" : "No");
$("#userId").val(Leanplum._userId || '');
