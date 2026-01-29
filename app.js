//const { Socket } = require("dgram")
const express = require("express");
const {createServer} = require("http");
const {join} = require("node:path");
const {Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const port = 3000;

//app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname,"index.html"));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

