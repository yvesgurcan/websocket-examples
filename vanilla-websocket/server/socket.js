const WebSocket = require('ws');
const { Server } = WebSocket;

module.exports = class WebSocketServer {
    constructor({ server }) {
        this.server = new Server({ server });
        this.server.on('connection', this.handleNewConnection);
        this.server.on('close', (event) => {});
    }

    static parse(payload) {
        try {
            return JSON.parse(payload);
        } catch (error) {
            console.error("Can't parse payload.", { payload });
            return '';
        }
    }

    static stringify(payload) {
        try {
            return JSON.stringify(payload);
        } catch (error) {
            console.error("Can't stringify payload.", { payload });
            return '';
        }
    }

    handleNewConnection = (client) => {
        client.on('message', (payload) =>
            this.handleNewMessage(payload, client)
        );
        client.on('close', (code) => this.handleClientClose(code, client));
    };

    handleNewMessage = (message, client) => {
        const parsedMessage = WebSocketServer.parse(message);
        console.log({ input: parsedMessage });

        let originalMessage = undefined;
        if (parsedMessage.includeOriginalMessage) {
            originalMessage = parsedMessage;
        }

        const responseMessage = {
            text: 'Hello from the WebSocket server!',
            originalMessage,
        };
        this.sendMessage(responseMessage, client);
    };

    handleClientClose(code, client) {
        console.log(`Client closed connection with code '${code}'.`);
    }

    sendMessage(message, client) {
        const parsedMessage = WebSocketServer.stringify(message);
        client.send(parsedMessage);
        console.log({ output: message });
    }
};
