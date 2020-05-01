## Examples

- Vanilla WebSocket:
    - [Client](./vanilla-websocket/client/index.html)
    - [Server](./vanilla-websocket/server/index.js)

## WebSockets

WebSocket is a protocol (like HTTP) that allows for a persistent connection between server and client so they can exchange data at any time.

A WebSocket server lives within an HTTP server. A handshake enabled the switch from HTTP to WS or WSS.

The server may listen on any port it chooses.

In order to communicate using the WebSocket protocol, your client needs to create a WebSocket object. This will automatically attempt to open the connection to the server.

The client and server can send messages to each other. These data within these messages must be a string.




The WebSocket API: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

 
A ready-to-deploy repository for Heroku using SocketIO: https://github.com/heroku-examples/node-socket.io
