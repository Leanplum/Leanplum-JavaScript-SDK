export default (function(){
  var topics = {}

  return {
    subscribe: function(topic, listener) {
      if(!topics.hasOwnProperty.call(topics, topic)) topics[topic] = []

      var index = topics[topic].push(listener) - 1

      return {
        remove: function() {
          delete topics[topic][index]
        }
      }
    },
    publish: function(topic, info) {
      if(!topics.hasOwnProperty.call(topics, topic)) return

      topics[topic].forEach(function(item) {
        item(info != undefined ? info : {})
      })
    }
  }
})()
