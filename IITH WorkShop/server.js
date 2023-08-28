const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);

  socket.join("clock-room");

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

setInterval(() => {
  io.to("clock-room").emit("time", new Date());
}, 1000);

app.listen(port, () => console.log("Listening on port 5000"));

app.get("/dummyApi", (req, res) => {
  const reqData = req.query.data;
  const reqName = req.query.name;
  res.send(reqData + " " + reqName);
});
x;
