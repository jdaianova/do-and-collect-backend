const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const WebSocket = require("ws");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4001;
const server = require("http").createServer(app);

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
