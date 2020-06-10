declare const Leanplum: typeof import('../../dist/leanplum').default

const isProdKey = (accessKey): boolean => /^prod_/.test(accessKey)

$('[data-action=setup]')
    .submit((e) => {
        e.preventDefault()
        const appId = $('#appId').val() as string
        const accessKey = $('#accessKey').val() as string
        const apiPath = $('#apiPath').val() as string

        if (appId && accessKey) {
            if (isProdKey(accessKey)) {
                Leanplum.setAppIdForProductionMode(appId, accessKey)
            } else {
                Leanplum.setAppIdForDevelopmentMode(appId, accessKey)
            }

            $('.requires-setup').removeClass('requires-setup')
        }

        if (apiPath) {
            Leanplum.setApiPath(apiPath)
        }
    })

let scope = null
let serviceWorkerUrl = 'sw.min.js'
if (window.location.hostname === 'leanplum.github.io') {
  scope = window.location.pathname // GH-pages guarantees ending slash
  serviceWorkerUrl = scope + serviceWorkerUrl
}
Leanplum.setWebPushOptions({ serviceWorkerUrl, scope })

$('#registerForWebPush')
    .click(() => Leanplum.registerForWebPush().then(refreshWebPush))

$('#unregisterFromWebPush')
    .click(() => Leanplum.unregisterFromWebPush().then(refreshWebPush))

Leanplum.addVariablesChangedHandler(() => {
    const vars = Leanplum.getVariables()
    const json = JSON.stringify(vars, null, 2)
    $('#variables').text(json)
})

$('#start,#startFromCache')
    .click((e) => {
      const method = $(e.target).attr('id')
      const userId = $('startUserId').val()

      if (userId) {
          Leanplum[method](userId)
      } else {
          Leanplum[method]()
      }

      $('.requires-start').removeClass('requires-start')
      $('.session-status .badge-warning').remove()
      updateUserId()
    })

$('#forceContentUpdate')
    .click(() => Leanplum.forceContentUpdate())

$('[data-action=track]')
    .submit((e) => {
        e.preventDefault()
        const event = $('#eventName').val() as string
        const value = parseFloat($('#eventValue').val() as string)
        const paramKey = $('#eventParamKey').val() as string
        const paramValue = $('#eventParamValue').val()

        let params
        if (paramKey && paramValue) {
            params = {}
            params[paramKey] = paramValue
        }

        if (params && value) {
            Leanplum.track(event, value, params)
        } else if (value) {
            Leanplum.track(event, value)
        } else if (params) {
            Leanplum.track(event, params)
        } else {
            Leanplum.track(event)
        }
    })

$('[data-action=trackPurchase]')
    .submit((e) => {
        e.preventDefault()
        const value = parseFloat($('#purchaseEventValue').val() as string)
        const currencyCode = $('#purchaseCurrency').val() as string
        const paramKey = $('#purchaseEventParamKey').val() as string
        const paramValue = $('#purchaseEventParamValue').val()
        const event = $('#purchaseEventName').val() as string

        let params
        if (paramKey && paramValue) {
            params = {}
            params[paramKey] = paramValue
        }

        if (event) {
            Leanplum.trackPurchase(value, currencyCode || 'USD', params, event)
        } else if (currencyCode) {
            Leanplum.trackPurchase(value, currencyCode, params)
        } else {
            Leanplum.trackPurchase(value)
        }
    })

$('[data-action=advanceToState]')
    .submit((e) => {
        e.preventDefault()
        const state = $('#stateName').val() as string
        const paramKey = $('#eventParamKey').val() as string
        const paramValue = $('#eventParamValue').val()

        let params
        if (paramKey && paramValue) {
            params = {}
            params[paramKey] = paramValue
        }

        if (params) {
            Leanplum.advanceTo(state, params)
        } else {
            Leanplum.advanceTo(state)
        }
    })

$('[data-action=setUserId]')
    .submit((e) => {
        e.preventDefault()
        const userId = $('#setUserId').val() as string
        Leanplum.setUserId(userId)
        updateUserId()
    })

$('[data-action=setUserAttribute]')
    .submit((e) => {
        e.preventDefault()
        const attribute = $('#attributeName').val() as string
        const value = $('#attributeValue').val()
        const attr = {}
        attr[attribute] = value
        Leanplum.setUserAttributes(attr)
    })

$('#sdkVersion').text(Leanplum.VERSION)

// populate initial info
updateUserId()
refreshWebPush()

function refreshWebPush(): void {
    $('#isWebPushSupported').text(Leanplum.isWebPushSupported() ? 'Yes' : 'No')
    Leanplum.isWebPushSubscribed()
        .then(isSubscribed => $('#isWebPushSubscribed').text(isSubscribed ? 'Yes' : 'No'))
}
function updateUserId(): void {
  const userId = Leanplum.getUserId()
  $('.current-user-id').text(userId)
  $('#setUserId').val(userId)
}

const inbox = Leanplum.inbox()
inbox.onChanged(renderAppInbox)
renderAppInbox()

$('#appInboxDownload')
    .click(() => inbox.downloadMessages())
$('#appInbox')
  .on('click', '[data-id]', (e) => {
    e.preventDefault()
    const messageId = $(e.target).closest('[data-id]').data('id')
    inbox.read(messageId)
  })
  .on('click', '[data-action=delete]', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const messageId = $(e.target).closest('[data-id]').data('id')
    inbox.remove(messageId)
  })
  .on('click', '[data-action=markAsRead]', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const messageId = $(e.target).closest('[data-id]').data('id')
    inbox.markAsRead(messageId)
  })

function renderAppInbox(): void {
  if (inbox.count() === 0) {
    $('#appInbox').html('<p class="m-1">No messages</p>')
  }

  const friendlyText = (timestamp): string => {
    const MS_IN_DAY = 24*60*60*1000
    const diff = Math.floor((Date.now() - timestamp) / MS_IN_DAY)
    return (
      diff > 1 ? `${diff} days ago` :
      diff > 0 ? 'yesterday' :
      'today'
    )
  }

  /* eslint-disable max-len */
  const html =
    '<div class="list-group mb-3">' +
    inbox.allMessages().map(message => `
      <button type="button" class="list-group-item list-group-item-action" data-id="${message.id()}">
        <span class="unread-indicator bg-primary" ${message.isRead() ? 'hidden' : ''}></span>
        <img width=64 class="rounded float-left mr-3" src="${message.imageUrl()}" />
        <div class="d-flex justify-content-between">
          <h5 class="mb-1">${message.title()}</h5>
          <small title="${new Date(message.timestamp()).toLocaleDateString()}">
            ${friendlyText(message.timestamp())}
          </small>
        </div>
        <div class="float-right ml-3">
          <a href="#" class="btn btn-sm btn-outline-secondary m-1" data-action="markAsRead" title="Mark as read" ${message.isRead() ? 'hidden' : ''}>✓</a>
          <a href="#" class="btn btn-sm btn-outline-danger" data-action="delete" title="Delete">×</a>
        </div>
        <p class="text-left">${message.subtitle()}</p>
      </button>
    `).join('') +
    '</div>'
  /* eslint-enable max-len */

  $('#appInbox').html(html)
  const unreadCount = inbox.unreadCount()
  $('#appInboxUnreadCount')
    .text(unreadCount)
    .removeClass('d-none')
    .toggleClass('badge-secondary', unreadCount === 0)
    .toggleClass('badge-primary', unreadCount > 0)
}
