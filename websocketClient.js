const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("Connected to WebSocket server");
  ws.send("Hello Server!");
});

ws.on("message", (message) => {
  const data = JSON.parse(message);
  console.log("Received from server:", data.message);
});

ws.on("close", () => {
  console.log("Disconnected from WebSocket server");
});
