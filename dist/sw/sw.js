!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n={};self.addEventListener("push",(function(e){var t=e.data&&e.data.text()?e.data.text():null;if(t){var o=JSON.parse(t);if(o&&o.title&&o.tag){o.data&&o.data.openAction&&o.data.openAction.hasOwnProperty("__name__")&&"Open URL"===o.data.openAction.__name__&&o.data.openAction.hasOwnProperty("URL")&&(n[o.tag]=o.data.openAction.URL);var i=o.title;delete o.title,e.waitUntil(self.registration.showNotification(i,o))}else console.log("Leanplum: No options, title or tag/id received, skipping display.")}else console.log("Leanplum: Push received without payload, skipping display.")})),self.addEventListener("notificationclick",(function(e){if(console.log("Leanplum: [Service Worker] Notification click received."),e.notification.close(),e.notification&&e.notification.tag){var t=e.notification.tag,o=n[t];o?(delete n[t],e.waitUntil(clients.openWindow(o))):console.log("Leanplum: [Service Worker] No action defined, doing nothing.")}else console.log("Leanplum: No notification or tag/id received, skipping open action.")}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B1c2hTZXJ2aWNlV29ya2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwib3BlbkFjdGlvbnMiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwianNvblN0cmluZyIsImRhdGEiLCJ0ZXh0Iiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInRpdGxlIiwidGFnIiwib3BlbkFjdGlvbiIsIndhaXRVbnRpbCIsInJlZ2lzdHJhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJjb25zb2xlIiwibG9nIiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJub3RpZmljYXRpb25JZCIsIm9wZW5BY3Rpb25VcmwiLCJjbGllbnRzIiwib3BlbldpbmRvdyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPckIsRUFBb0JVLEVBQUVlLEVBQUlFLEVBQUssU0FBU0EsR0FBTyxPQUFPTixFQUFNTSxJQUFRQyxLQUFLLEtBQU1ELElBQzlJLE9BQU9GLEdBSVJ6QixFQUFvQjZCLEVBQUksU0FBUzFCLEdBQ2hDLElBQUlTLEVBQVNULEdBQVVBLEVBQU9xQixXQUM3QixXQUF3QixPQUFPckIsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUgsRUFBb0JVLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJaLEVBQW9CYSxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6Ry9CLEVBQW9Ca0MsRUFBSSxHQUlqQmxDLEVBQW9CQSxFQUFvQm1DLEVBQUksRyxnQkMvQ3JELElBR0lDLEVBQWMsR0EyRGxCQyxLQUFLQyxpQkFBaUIsUUF0RHRCLFNBQXNCQyxHQUNsQixJQUFJQyxFQUFhRCxFQUFNRSxNQUFRRixFQUFNRSxLQUFLQyxPQUFTSCxFQUFNRSxLQUFLQyxPQUFTLEtBQ3ZFLEdBQUtGLEVBQUwsQ0FLQSxJQUFJRyxFQUFVQyxLQUFLQyxNQUFNTCxHQUd6QixHQUFLRyxHQUFZQSxFQUFRRyxPQUFVSCxFQUFRSSxJQUEzQyxDQU9JSixFQUFRRixNQUFRRSxFQUFRRixLQUFLTyxZQUM3QkwsRUFBUUYsS0FBS08sV0FBV2YsZUExQlYsYUFDQSxhQTBCZFUsRUFBUUYsS0FBS08sV0FBMEIsVUFDdkNMLEVBQVFGLEtBQUtPLFdBQVdmLGVBMUJsQixTQTJCTkcsRUFBWU8sRUFBUUksS0FBT0osRUFBUUYsS0FBS08sV0FBa0IsS0FHOUQsSUFBSUYsRUFBUUgsRUFBUUcsYUFDYkgsRUFBUUcsTUFHZlAsRUFBTVUsVUFBVVosS0FBS2EsYUFBYUMsaUJBQWlCTCxFQUFPSCxTQWpCdERTLFFBQVFDLElBQUksMEVBUlpELFFBQVFDLElBQUksaUVBb0RwQmhCLEtBQUtDLGlCQUFpQixxQkFsQnRCLFNBQW1DQyxHQUcvQixHQUZBYSxRQUFRQyxJQUFJLDJEQUNaZCxFQUFNZSxhQUFhQyxRQUNkaEIsRUFBTWUsY0FBaUJmLEVBQU1lLGFBQWFQLElBQS9DLENBSUEsSUFBSVMsRUFBaUJqQixFQUFNZSxhQUFhUCxJQUNwQ1UsRUFBZ0JyQixFQUFZb0IsR0FDM0JDLFVBSUVyQixFQUFZb0IsR0FFbkJqQixFQUFNVSxVQUFVUyxRQUFRQyxXQUFXRixLQUwvQkwsUUFBUUMsSUFBSSxxRUFOWkQsUUFBUUMsSUFBSSIsImZpbGUiOiJzdy9zdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDIwIExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICpcbiAqICBPcmlnaW5hbCBGaWxlOlxuICpcbiAqICBQdXNoIE5vdGlmaWNhdGlvbnMgQ29kZUxhYlxuICogIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xudmFyIEFDVElPTl9OQU1FX0tFWSA9ICdfX25hbWVfXyc7XG52YXIgT1BFTl9VUkxfQUNUSU9OID0gJ09wZW4gVVJMJztcbnZhciBBUkdfVVJMID0gJ1VSTCc7XG52YXIgb3BlbkFjdGlvbnMgPSB7fTtcbi8qKlxuICogVHJpZ2dlcmVkIG9uIHB1c2ggbWVzc2FnZSByZWNlaXZlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgcHVzaCBwYXlsb2FkIHRoYXQgdGhlIGJyb3dzZXIgcmVjZWl2ZWQuXG4gKi9cbmZ1bmN0aW9uIHB1c2hMaXN0ZW5lcihldmVudCkge1xuICAgIHZhciBqc29uU3RyaW5nID0gZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnRleHQoKSA/IGV2ZW50LmRhdGEudGV4dCgpIDogbnVsbDtcbiAgICBpZiAoIWpzb25TdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBQdXNoIHJlY2VpdmVkIHdpdGhvdXQgcGF5bG9hZCwgc2tpcHBpbmcgZGlzcGxheS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICAvKiogQG5hbWVzcGFjZSBvcHRpb25zLnRpdGxlIFRoZSB0aXRsZSBvZiB0aGUgcHVzaCBub3RpZmljYXRpb24uICoqL1xuICAgIC8qKiBAbmFtZXNwYWNlIG9wdGlvbnMudGFnIFRoZSBpZCBvZiB0aGUgcHVzaCBub3RpZmljYXRpb24gKiovXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnRpdGxlIHx8ICFvcHRpb25zLnRhZykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IE5vIG9wdGlvbnMsIHRpdGxlIG9yIHRhZy9pZCByZWNlaXZlZCwgc2tpcHBpbmcgJyArXG4gICAgICAgICAgICAnZGlzcGxheS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBFeHRyYWN0IG9wZW4gYWN0aW9uIHVybC4gV2Ugb25seSBzdXBwb3J0IG9wZW4gdXJsIGFjdGlvbiBmb3Igbm93LlxuICAgIC8qKiBAbmFtZXNwYWNlIG9wdGlvbnMuZGF0YS5vcGVuQWN0aW9uIFRoZSBvcGVuQWN0aW9uIG9mIHRoZSBwdXNoIG5vdGlmaWNhdGlvbi4gKiovXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEub3BlbkFjdGlvbiAmJlxuICAgICAgICBvcHRpb25zLmRhdGEub3BlbkFjdGlvbi5oYXNPd25Qcm9wZXJ0eShBQ1RJT05fTkFNRV9LRVkpICYmXG4gICAgICAgIG9wdGlvbnMuZGF0YS5vcGVuQWN0aW9uW0FDVElPTl9OQU1FX0tFWV0gPT09IE9QRU5fVVJMX0FDVElPTiAmJlxuICAgICAgICBvcHRpb25zLmRhdGEub3BlbkFjdGlvbi5oYXNPd25Qcm9wZXJ0eShBUkdfVVJMKSkge1xuICAgICAgICBvcGVuQWN0aW9uc1tvcHRpb25zLnRhZ10gPSBvcHRpb25zLmRhdGEub3BlbkFjdGlvbltBUkdfVVJMXTtcbiAgICB9XG4gICAgLy8gRXh0cmFjdCB0aXRsZSBhbmQgZGVsZXRlIGZyb20gb3B0aW9ucy5cbiAgICB2YXIgdGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuICAgIGRlbGV0ZSBvcHRpb25zLnRpdGxlO1xuICAgIC8qKiBAbmFtZXNwYWNlIHNlbGYucmVnaXN0cmF0aW9uICoqL1xuICAgIC8qKiBAbmFtZXNwYWNlIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24gKiovXG4gICAgZXZlbnQud2FpdFVudGlsKHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24odGl0bGUsIG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ2FsbGJhY2sgdGhhdCBoYW5kbGVzIGNsaWNrcyBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBub3RpZmljYXRpb24gZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50Lm5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGV2ZW50LndhaXRVbnRpbCBUaGUgYnJvd3NlciB3aWxsIGtlZXAgdGhlIHNlcnZpY2Ugd29ya2VyIHJ1bm5pbmcgdW50aWwgdGhlXG4gKiBwcm9taXNlIHlvdSBwYXNzZWQgaW4gaGFzIHNldHRsZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbkNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFtTZXJ2aWNlIFdvcmtlcl0gTm90aWZpY2F0aW9uIGNsaWNrIHJlY2VpdmVkLicpO1xuICAgIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuICAgIGlmICghZXZlbnQubm90aWZpY2F0aW9uIHx8ICFldmVudC5ub3RpZmljYXRpb24udGFnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogTm8gbm90aWZpY2F0aW9uIG9yIHRhZy9pZCByZWNlaXZlZCwgc2tpcHBpbmcgb3BlbiBhY3Rpb24uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5vdGlmaWNhdGlvbklkID0gZXZlbnQubm90aWZpY2F0aW9uLnRhZztcbiAgICB2YXIgb3BlbkFjdGlvblVybCA9IG9wZW5BY3Rpb25zW25vdGlmaWNhdGlvbklkXTtcbiAgICBpZiAoIW9wZW5BY3Rpb25VcmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBbU2VydmljZSBXb3JrZXJdIE5vIGFjdGlvbiBkZWZpbmVkLCBkb2luZyBub3RoaW5nLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZSBvcGVuQWN0aW9uc1tub3RpZmljYXRpb25JZF07XG4gICAgLyoqIEBuYW1lc3BhY2UgY2xpZW50cy5vcGVuV2luZG93ICoqL1xuICAgIGV2ZW50LndhaXRVbnRpbChjbGllbnRzLm9wZW5XaW5kb3cob3BlbkFjdGlvblVybCkpO1xufVxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgcHVzaExpc3RlbmVyKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xpY2snLCBub3RpZmljYXRpb25DbGlja0xpc3RlbmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=