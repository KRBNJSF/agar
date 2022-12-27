const socket = io("http://localhost:3000");

//Sending message to the server
socket.emit("clientWelcome", 5, "jojo");

//Receiving message from the server
socket.on("serverWelcome", (...args) => {
  console.log(args);
});
