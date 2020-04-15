const isProdKey = (accessKey) => /^prod_/.test(accessKey);
$("[data-action=setup]")
    .submit((e) => {
        e.preventDefault();
        const appId = $('#appId').val();
        const accessKey = $('#accessKey').val();
        const apiPath = $('#apiPath').val();

        if (appId && accessKey) {
            if (isProdKey(accessKey)) {
                Leanplum.setAppIdForProductionMode(appId, accessKey);
            } else {
                Leanplum.setAppIdForDevelopmentMode(appId, accessKey);
            }

            $(".requires-setup").removeClass("requires-setup");
        }

        if (apiPath) {
            Leanplum.setApiPath(apiPath);
        }
    });

$("#registerForWebPush")
    .click(() => Leanplum.registerForWebPush().then(refreshWebPush));

$("#unregisterFromWebPush")
    .click(() => Leanplum.unregisterFromWebPush().then(refreshWebPush));

Leanplum.addVariablesChangedHandler(() => {
    const vars = Leanplum.getVariables();
    const json = JSON.stringify(vars, null, 2);
    $("#variables").text(json);
});

$("#start")
    .click(() => {
        const userId = $("startUserId").val();

        if (userId) {
            Leanplum.start(userId);
        } else {
            Leanplum.start();
        }
    });

$("#forceContentUpdate")
    .click(() => Leanplum.forceContentUpdate());

$("[data-action=track]")
    .submit((e) => {
        e.preventDefault();
        const event = $("#eventName").val();
        const value = parseFloat($("#eventValue").val());
        const paramKey = $("#eventParamKey").val();
        const paramValue = $("#eventParamValue").val();

        let params;
        if (paramKey && paramValue) {
            params = {};
            params[paramKey] = paramValue;
        }

        if (params && value) {
            Leanplum.track(event, value, params);
        } else if (value) {
            Leanplum.track(event, value);
        } else if (params) {
            Leanplum.track(event, params);
        } else {
            Leanplum.track(event);
        }
    });

$("[data-action=trackPurchase]")
    .submit((e) => {
        e.preventDefault();
        const value = parseFloat($("#purchaseEventValue").val());
        const currencyCode = $("#purchaseCurrency").val();
        const paramKey = $("#purchaseEventParamKey").val();
        const paramValue = $("#purchaseEventParamValue").val();
        const event = $("#purchaseEventName").val();

        let params;
        if (paramKey && paramValue) {
            params = {}
            params[paramKey] = paramValue;
        }

        if (event) {
            Leanplum.trackPurchase(value, currencyCode || 'USD', params, event);
        } else if (currencyCode) {
            Leanplum.trackPurchase(value, currencyCode, params);
        } else {
            Leanplum.trackPurchase(value);
        }
    });

$("[data-action=advanceToState]")
    .submit((e) => {
        e.preventDefault();
        const state = $("#stateName").val();
        const paramKey = $("#eventParamKey").val();
        const paramValue = $("#eventParamValue").val();

        let params;
        if (paramKey && paramValue) {
            params = {};
            params[paramKey] = paramValue;
        }

        if (params) {
            Leanplum.advanceToState(state, params);
        } else {
            Leanplum.advanceToState(state);
        }
    });

$("[data-action=setUserId]")
    .submit((e) => {
        e.preventDefault();
        const userId = $("#setUserId").val();
        Leanplum.setUserId(userId);
    });

$("[data-action=setUserAttribute]")
    .submit((e) => {
        e.preventDefault();
        const attribute = $("#attributeName").val();
        const value = $("#attributeValue").val();
        const attr = {};
        attr[attribute] = value;
        Leanplum.setUserAttributes(attr);
    });

$("#sdkVersion").text(Leanplum.VERSION);

// populate initial info
$("#userId").val(Leanplum._userId || '');
refreshWebPush();

function refreshWebPush() {
    $("#isWebPushSupported").text(Leanplum.isWebPushSupported() ? "Yes" : "No");
    Leanplum.isWebPushSubscribed()
        .then(isSubscribed => $("#isWebPushSubscribed").text(isSubscribed ? "Yes" : "No"));
}
