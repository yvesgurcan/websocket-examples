const express = require('express');
const WebSocketServer = require('./socket');

const PORT = process.env.PORT || 3000;

const server = express()
    .use((_, res) => res.sendFile('index.html', { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}.`));

new WebSocketServer({ server });
