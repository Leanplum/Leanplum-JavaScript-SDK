var isProdKey = function (accessKey) { return /^prod_/.test(accessKey); };
$('[data-action=setup]')
    .submit(function (e) {
    e.preventDefault();
    var appId = $('#appId').val();
    var accessKey = $('#accessKey').val();
    var apiPath = $('#apiPath').val();
    if (appId && accessKey) {
        if (isProdKey(accessKey)) {
            Leanplum.setAppIdForProductionMode(appId, accessKey);
        }
        else {
            Leanplum.setAppIdForDevelopmentMode(appId, accessKey);
        }
        $('.requires-setup').removeClass('requires-setup');
    }
    if (apiPath) {
        Leanplum.setApiPath(apiPath);
    }
});
var scope = null;
var serviceWorkerUrl = 'sw.min.js';
if (window.location.hostname === 'leanplum.github.io') {
    scope = window.location.pathname; // GH-pages guarantees ending slash
    serviceWorkerUrl = scope + serviceWorkerUrl;
}
Leanplum.setWebPushOptions({ serviceWorkerUrl: serviceWorkerUrl, scope: scope });
$('#registerForWebPush')
    .click(function () { return Leanplum.registerForWebPush().then(refreshWebPush); });
$('#unregisterFromWebPush')
    .click(function () { return Leanplum.unregisterFromWebPush().then(refreshWebPush); });
Leanplum.addVariablesChangedHandler(function () {
    var vars = Leanplum.getVariables();
    var json = JSON.stringify(vars, null, 2);
    $('#variables').text(json);
});
$('#start,#startFromCache')
    .click(function (e) {
    var method = $(e.target).attr('id');
    var userId = $('startUserId').val();
    if (userId) {
        Leanplum[method](userId);
    }
    else {
        Leanplum[method]();
    }
    $('.requires-start').removeClass('requires-start');
    $('.session-status .badge-warning').remove();
    updateUserId();
});
$('#forceContentUpdate')
    .click(function () { return Leanplum.forceContentUpdate(); });
$('[data-action=track]')
    .submit(function (e) {
    e.preventDefault();
    var event = $('#eventName').val();
    var value = parseFloat($('#eventValue').val());
    var paramKey = $('#eventParamKey').val();
    var paramValue = $('#eventParamValue').val();
    var params;
    if (paramKey && paramValue) {
        params = {};
        params[paramKey] = paramValue;
    }
    if (params && value) {
        Leanplum.track(event, value, params);
    }
    else if (value) {
        Leanplum.track(event, value);
    }
    else if (params) {
        Leanplum.track(event, params);
    }
    else {
        Leanplum.track(event);
    }
});
$('[data-action=trackPurchase]')
    .submit(function (e) {
    e.preventDefault();
    var value = parseFloat($('#purchaseEventValue').val());
    var currencyCode = $('#purchaseCurrency').val();
    var paramKey = $('#purchaseEventParamKey').val();
    var paramValue = $('#purchaseEventParamValue').val();
    var event = $('#purchaseEventName').val();
    var params;
    if (paramKey && paramValue) {
        params = {};
        params[paramKey] = paramValue;
    }
    if (event) {
        Leanplum.trackPurchase(value, currencyCode || 'USD', params, event);
    }
    else if (currencyCode) {
        Leanplum.trackPurchase(value, currencyCode, params);
    }
    else {
        Leanplum.trackPurchase(value);
    }
});
$('[data-action=advanceToState]')
    .submit(function (e) {
    e.preventDefault();
    var state = $('#stateName').val();
    var paramKey = $('#stateParamKey').val();
    var paramValue = $('#stateParamValue').val();
    var params;
    if (paramKey && paramValue) {
        params = {};
        params[paramKey] = paramValue;
    }
    if (params) {
        Leanplum.advanceTo(state, params);
    }
    else {
        Leanplum.advanceTo(state);
    }
});
$('[data-action=setUserId]')
    .submit(function (e) {
    e.preventDefault();
    var userId = $('#setUserId').val();
    Leanplum.setUserId(userId);
    updateUserId();
});
$('[data-action=setUserAttribute]')
    .submit(function (e) {
    e.preventDefault();
    var attribute = $('#attributeName').val();
    var value = $('#attributeValue').val();
    var attr = {};
    attr[attribute] = value;
    Leanplum.setUserAttributes(attr);
});
$('#sdkVersion').text(Leanplum.VERSION);
// populate initial info
updateUserId();
refreshWebPush();
function refreshWebPush() {
    $('#isWebPushSupported').text(Leanplum.isWebPushSupported() ? 'Yes' : 'No');
    Leanplum.isWebPushSubscribed()
        .then(function (isSubscribed) { return $('#isWebPushSubscribed').text(isSubscribed ? 'Yes' : 'No'); });
}
function updateUserId() {
    var userId = Leanplum.getUserId();
    $('.current-user-id').text(userId);
    $('#setUserId').val(userId);
}
var inbox = Leanplum.inbox();
inbox.onChanged(renderAppInbox);
renderAppInbox();
$('#appInboxDownload')
    .click(function () { return inbox.downloadMessages(); });
$('#appInbox')
    .on('click', '[data-id]', function (e) {
    e.preventDefault();
    var messageId = $(e.target).closest('[data-id]').data('id');
    inbox.read(messageId);
})
    .on('click', '[data-action=delete]', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var messageId = $(e.target).closest('[data-id]').data('id');
    inbox.remove(messageId);
})
    .on('click', '[data-action=markAsRead]', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var messageId = $(e.target).closest('[data-id]').data('id');
    inbox.markAsRead(messageId);
});
function renderAppInbox() {
    if (inbox.count() === 0) {
        $('#appInbox').html('<p class="m-1">No messages</p>');
    }
    var friendlyText = function (timestamp) {
        var MS_IN_DAY = 24 * 60 * 60 * 1000;
        var diff = Math.floor((Date.now() - timestamp) / MS_IN_DAY);
        return (diff > 1 ? diff + " days ago" :
            diff > 0 ? 'yesterday' :
                'today');
    };
    /* eslint-disable max-len */
    var html = '<div class="list-group mb-3">' +
        inbox.allMessages().map(function (message) { return "\n      <button type=\"button\" class=\"list-group-item list-group-item-action\" data-id=\"" + message.id() + "\">\n        <span class=\"unread-indicator bg-primary\" " + (message.isRead() ? 'hidden' : '') + "></span>\n        <img width=64 class=\"rounded float-left mr-3\" src=\"" + message.imageUrl() + "\" />\n        <div class=\"d-flex justify-content-between\">\n          <h5 class=\"mb-1\">" + message.title() + "</h5>\n          <small title=\"" + new Date(message.timestamp()).toLocaleDateString() + "\">\n            " + friendlyText(message.timestamp()) + "\n          </small>\n        </div>\n        <div class=\"float-right ml-3\">\n          <a href=\"#\" class=\"btn btn-sm btn-outline-secondary m-1\" data-action=\"markAsRead\" title=\"Mark as read\" " + (message.isRead() ? 'hidden' : '') + ">\u2713</a>\n          <a href=\"#\" class=\"btn btn-sm btn-outline-danger\" data-action=\"delete\" title=\"Delete\">\u00D7</a>\n        </div>\n        <p class=\"text-left\">" + message.subtitle() + "</p>\n      </button>\n    "; }).join('') +
        '</div>';
    /* eslint-enable max-len */
    $('#appInbox').html(html);
    var unreadCount = inbox.unreadCount();
    $('#appInboxUnreadCount')
        .text(unreadCount)
        .removeClass('d-none')
        .toggleClass('badge-secondary', unreadCount === 0)
        .toggleClass('badge-primary', unreadCount > 0);
}
// register handler for in-app messages
Leanplum.on('showMessage', function (args) {
    var _a, _b;
    var message = args.message, context = args.context;
    var title, body, buttons = [];
    if (message.__name__ === 'HTML' && message.__file__Template === 'lp_public_floating-interstitial-10.html') {
        title = (_a = message.Title) === null || _a === void 0 ? void 0 : _a['Text value'];
        body = (_b = message.Message) === null || _b === void 0 ? void 0 : _b['Text value'];
        var imageInfo = message['Hero image'];
        var imageUrl = imageInfo === null || imageInfo === void 0 ? void 0 : imageInfo['Image URL'];
        if (imageUrl) {
            var imageHtml = "<p><img src=\"" + imageUrl + "\" width=\"" + imageInfo.width + "\" height=\"" + imageInfo.height + "\" /></p>";
            if (imageInfo['Display above headline']) {
                body = imageHtml + body;
            }
            else {
                body += imageHtml;
            }
        }
        var maybeAdd = function (buttonName) {
            var button = message[buttonName];
            if (!button) {
                console.log("Could not find " + buttonName + " in message: ", message);
                return;
            }
            if (!button['Show button']) {
                return;
            }
            buttons.push({
                text: button.Text['Text value'],
                action: "Select " + buttonName.toLowerCase() + " action"
            });
        };
        maybeAdd('Button 1');
        maybeAdd('Button 2');
    }
    else if (message.__name__ === 'Confirm') {
        title = message.Title;
        body = message.Message;
        buttons.push({ text: message['Cancel text'], action: 'Cancel action' }, { text: message['Accept text'], action: 'Accept action', primary: true });
    }
    else if (message.__name__ === 'Alert') {
        title = message.Title;
        body = message.Message;
        buttons.push({ text: 'Dismiss', action: 'Dismiss action' });
    }
    else if (message.__name__ === 'Web Interstitial') {
        if (message['Has dismiss button']) {
            // Dismiss button has no action
            buttons.push({ text: 'Dismiss' });
        }
        body = "<iframe class=\"w-100 border-0\" src=\"" + message.URL + "\"></iframe>";
    }
    else if (message.__name__ === 'Center Popup') {
        title = message.Title.Text;
        body = message.Message.Text;
        buttons.push({ text: message['Accept button'].Text, action: 'Accept action' });
    }
    else if (message.__name__ === 'Push Ask to Ask') {
        title = message.Title.Text;
        body = message.Message.Text;
        buttons.push({ text: message['Cancel button'].Text, action: 'Cancel action' }, { text: message['Accept button'].Text, action: 'Accept action', primary: true });
    }
    else if (message.__name__ === 'Interstitial') {
        title = message.Title.Text;
        body = message.Message.Text;
        buttons.push({ text: message['Accept button'].Text, action: 'Accept action', primary: true });
    }
    else {
        // unknown action, do not show
        console.log("Skipping unsupported (by Rondo) action: " + message.__name__);
        return;
    }
    var modalId = "lpModal-" + message.messageId + (args.isPreview ? '-preview' : '');
    var buttonHtml = function (button) {
        return "<button\n        class=\"btn btn-" + (button.primary ? 'primary' : 'secondary') + "\"\n        data-action=\"" + button.action + "\"\n        data-toggle=\"modal\"\n        data-target=\"#" + modalId + "\">\n      " + button.text + "\n    </button>";
    };
    var footer = !buttons.length ? '' :
        "<div class=\"modal-footer\">" + buttons.map(buttonHtml).join('') + "</div>";
    var header = !title ? '' :
        "<div class=\"modal-header\">\n      <h5 class=\"modal-title\">" + title + "</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>";
    var modal = "\n  <div class=\"modal\" id=\"" + modalId + "\" tabIndex=\"-1\" role=\"dialog\">\n    <form class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        " + header + "\n        <div class=\"modal-body\">\n          " + body + "\n        </div>\n        " + footer + "\n      </div>\n    </form>\n  </div>\n";
    var runTrackedAction = function (e) {
        e.preventDefault();
        var action = $(e.currentTarget).data('action');
        if (!action)
            return;
        context.runTrackedActionNamed(action);
    };
    $(modal).hide().appendTo('body')
        .on('shown.bs.modal', function () { return context.track(); })
        .on('hidden.bs.modal', function () { return $("#" + modalId).remove(); })
        .find('button').on('click', runTrackedAction).end()
        .modal({ show: true });
});
