/**
 * Handles In-app message filtering
 */
import VarCache from "./VarCache";

/** private
 * return true if message pass one trigger/verb condition
 * @param params {Object}
 * @param message
 * @returns {Boolean}
 */
const filterByTriggers = (params={}) => (message) => {
  const triggers = message.whenTriggers && message.whenTriggers.children
  if(!params.triggers || !triggers){
    return false
  }

  let filteredByTriggers = triggers.filter((trigger) => (
    params.triggers.includes(trigger.subject))
  )

  if (!filteredByTriggers.length){
    return false
  }
  const verbFilter = filterByVerbs(params)
  if(!verbFilter){
    return false
  }
  filteredByTriggers = filteredByTriggers.filter(verbFilter)

  if(!filteredByTriggers.length){
    return false
  }

  return true
}

/** private
 * return true if trigger pass verb/noun/objects condition
 * @param params {Object}
 * @param trigger {Object}
 * @returns {Boolean}
 */
const filterByVerbs = (params) => (trigger) => {
  if(trigger.verb === '') {
    return true
  }
  const evaluator = triggerVerbEvaluators[trigger.verb]
  if( !evaluator(trigger, params.noun, params.objects)) {
    return false
  }
  return true
}

/** prrivate
 * return true if message pass all limits
 * @param now {Date.now()}
 * @param message {Object}
 * @returns {Boolean}
 */
const filterByLimits  = (now) => (message) => {
  const limits = message.whenLimits && message.whenLimits.children
  if(!limits || limits.length < 1){
    return true
  }
  return limits.every((limit) => {
      const verbEvaluator = limitVerbEvaluators[limit.verb]
      if (!verbEvaluator) {
        return false
      }
      return verbEvaluator(message.id, limit.noun, limit.objects[0], now)
    }
  )
}

/** private
 * return the amount of ocurence of messageView since 'since'
 * @param since {Number}
 * @param messageView {Array}
 * @returns {function(*, *): *}
 */
const countMessageViewsByLimit = (since) => (iterator,messageView) => {
  if(messageView.t > since){
    iterator+=1
  }
  return iterator
}
/** private
 * return true if no limits are defined or if now is in the range
 * @param now {Date.now()}
 * @param limitTime {Object}
 * @returns {Boolean}
 */
const filterByLimitTimes = (now) => (limitTime) => {
  return (!limitTime.startTime || limitTime.startTime < now) &&
    (!limitTime.endTime || limitTime.endTime > now )
}

/** private
 * provide evaluators for filterByVerbs
 */
const triggerVerbEvaluators = {
  triggers: (trigger, noun) => {
    return noun === trigger.noun
  },
  triggersWithParameter: (trigger, noun, params) => {
    return noun === trigger.noun && params.paramValue === trigger.objects[params.paramName]
  },
  changesTo: (trigger, noun, params) => {
    return noun === trigger.noun && params.to === trigger.objects[0]
  },
  changesFromTo: (trigger, noun, params) => {
    return noun === trigger.noun &&
      params.from === trigger.objects[0] &&
      params.to === trigger.objects[1]
  }
}

/** private
 * provide evaluators for filterByLimit
 */
const limitVerbEvaluators = {
  limitUser: (messageId, maxView) => {
    return VarCache.getMessageView(messageId).length < maxView
  },
  limitMonth: (messageId, maxView,amount,now) => {
    const since = now - amount * 30 * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitWeek: (messageId, maxView,amount,now) => {
    const since = now - amount * 7 * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitDay: (messageId, maxView,amount,now) => {
    const since = now - amount * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitHour: (messageId, maxView,amount,now) => {
    const since = now - amount * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitMinute: (messageId, maxView,amount,now) => {
    const since = now - amount * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitSecond: (messageId, maxView,amount,now) => {
    const since = now - amount * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since),0) < maxView
  },
  limitSession: (messageId, maxView) => {
    return VarCache.getMessageView(messageId,true).length < maxView
  },
}

export default class ActionManager {

  /** public
   * return an array of filtered message
   * @param messages {Object}
   * @param trigger {String}
   * @param verb {String}
   * @param noun {String}
   * @param params {{
   *  from?:string,
   *  to?:string,
   *  paramValue?:String,
   *  paramName?:String,
   * }}
   * @returns {Array}
   */
  static filterMessages(messages, trigger='', verb=null, noun='', params={}) {

    const now = Date.now()

    let filteredMessages = Object.entries(messages)
      .map(([id, message]) => ({ id, ...message }))

    filteredMessages = filteredMessages
      .filter(filterByTriggers(
        {
          triggers:[trigger]
        }
        ))
      .filter(filterByLimits(now))
      .filter(filterByLimitTimes(now))
    return filteredMessages
  }

}