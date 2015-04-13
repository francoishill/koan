/**
 * Service for providing access the backend API via HTTP and WebSockets.
 */
import ws from './websock';

// utilize jQuery's callbacks as an event system
function event() {
  var callbacks = $.Callbacks();
  return {
    subscribe: function (fn) {
      if (fn) {
        // unsubscribe from event on controller destruction to prevent memory leaks
        this.onRemove(function () {
          callbacks.remove(fn);
        });
      } else {
        // ??
      }
      callbacks.add(fn);
    },
    unsubscribe: callbacks.remove,
    publish: callbacks.fire
  };
}

// websocket data event (which transmits json-rpc payloads)
function index(obj, i) {
  return obj[i];
} // convert dot notation string into an actual object index

// ES7 injection decorator?
@inject {httpClient}
class Api {
  constructor() {
    var apiBase = 'api' /* base /api uri */,
        token = (window.sessionStorage.token || window.localStorage.token),
        headers = {Authorization: 'Bearer ' + token},
        wsHost = (window.document.location.origin || (window.location.protocol + '//' + window.location.host)).replace(/^http/, 'ws'),
        api = {events: {}};

  }


  // websocket connected disconnected events
  connected() {
    event();
  }
  disconnected() {
    event();
  }

  debug() {
    return {
      clearDatabase: function () {
        return httpClient({method: 'POST', url: apiBase + '/debug/clearDatabase', headers: headers});
      }
    }
  } 
}