const WebSocket = require("ws");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 4001;
const server = require('http').createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ message: "Welcome to WebSocket server!" }));
});

const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

mongoose.connection.once("open", () => {
  const taskCollection = mongoose.connection.collection("tasks");
  const changeStream = taskCollection.watch();

  changeStream.on("change", (change) => {
    broadcast({ message: "Task list updated", change });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = wss;
