const socket = io("http://localhost:3000");

socket.emit("clientWelcome", 5, "jojo");

socket.on("serverWelcome", (...args) => {
  console.log(args);
});
