// Basic initialization
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/404.html");
});

io.on("connection", (socket) => {
  console.log(`Server: New user connected ${socket.id}`);

  //Sending message to the client
  socket.emit("serverWelcome", "hello", 1);

  //Receiving message fromm the client
  socket.on("clientWelcome", (...args) => {
    io.emit("clientWelcome", "Hello");
  });
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
