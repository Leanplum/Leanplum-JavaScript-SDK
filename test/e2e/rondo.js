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
        }

        if (apiPath) {
            Leanplum.setApiPath(apiPath);
        }

        $(".requires-setup").removeClass("requires-setup");
    });

$("#registerForWebPush")
    .click(() => Leanplum.registerForWebPush());

// TODO: userAttributes
$("#start")
    .click(() => {
        const userId = $("startUserId").val();

        const updateVars = () => {
            const vars = Leanplum.getVariables();
            const json = JSON.stringify(vars, null, 2);
            $("#variables").text(json);
        };

        if (userId) {
            Leanplum.start(userId, updateVars);
        } else {
            Leanplum.start(updateVars);
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
$("#isWebPushSupported").text(Leanplum.isWebPushSupported() ? "Yes" : "No");
$("#userId").val(Leanplum._userId || '');
