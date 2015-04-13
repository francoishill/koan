// initiate the websocket connection to the host
var ws = api.ws = new WebSocket(wsHost + '?access_token=' + token);

export default ws;

window.setInterval(function () {
  ws.send('ping');
}, 1000 * 25); // keep-alive signal (needed for heroku)

ws.onopen = function () {
  api.connected.publish.apply(this, arguments);
  $rootScope.$apply();
};

ws.onclose = function () {
  api.disconnected.publish.apply(this, arguments);
  $rootScope.$apply();
};    

ws.onmessage = function (event /* websocket event object */) {
  var data = JSON.parse(event.data /* rpc event object (data) */);
  if (!data.method) {
    throw 'Malformed event data received through WebSocket. Received event data object was: ' + data;
  } else if (!data.method.split('.').reduce(index, api)) {
    throw 'Undefined event type received through WebSocket. Received event data object was: ' + data;
  }
  data.method.split('.').reduce(index, api).publish(data.params);
  $rootScope.$apply();
};  

