const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;
app.listen(5001, () => console.log("Listening on port ${5001}"));
app.g