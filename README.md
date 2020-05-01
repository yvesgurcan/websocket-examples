## Examples

- Vanilla WebSocket:
    - [Client](./vanilla-websocket/client/index.html)
    - [Server](./vanilla-websocket/server/index.js)

## How does WebSocket work?

WebSocket is a protocol (like HTTP) that allows for a persistent connection between server and client so they can exchange data at any time.

Typically, a WebSocket server lives within an HTTP server. A handshake enabled the switch from HTTP to WS or WSS.

The server may listen on any port it chooses.

In order to communicate using the WebSocket protocol, your client needs to create a WebSocket object. This will automatically attempt to open the connection to the server.

The client and server can send messages to each other. These data within these messages must be a string.

When the connection is closed, a code is provided to provide the reason (when developing, I usually get `1006` for "abnormal closure" because of hot reload tools). Except for that and the handshake (code `101` when switching protocols), there are no concept of status code on the WebSocket protocol. It's up to you to define the contract between the client and the server.

## Resources

The WebSocket API: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

A ready-to-deploy repository for Heroku using SocketIO: https://github.com/heroku-examples/node-socket.io
