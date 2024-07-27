const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server (httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
}
)

const port = process.env.PORT || 4000;
const roomUsers = new Map();
const roomCode=  new Map();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on ('connection', (socket) => {
  socket.on ("join-event", (roomID, username) => {
    socket.join (roomID);
    if (!roomUsers.has(roomID)) {
      roomUsers.set (roomID, []);
    }
    const clientsList = roomUsers.get(roomID);
    const existingClient = clientsList.find(u => u.username === username);
    if (!existingClient) {
      clientsList.push ({id: socket.id, username});
      socket.to(roomID).emit('user-joined', username);
    }
    io.to(roomID).emit('connected-users', roomUsers.get(roomID));

    const currentCode = roomCode.get(roomID) || '';
    socket.emit('code-update', currentCode);
    
  })

  socket.on ("leave-room", (roomID, username) => {
    socket.leave (roomID);

    const clientsList = roomUsers.get(roomID);
    const userIndex = clientsList.findIndex ( user => user.id === socket.id);
    if (userIndex !== -1) {
      clientsList.splice (userIndex, 1);
    }
    roomUsers.set (roomID, clientsList);

    socket.to(roomID).emit ("user-left", username);
    io.to(roomID).emit ('connected-users', roomUsers.get(roomID));
  })

  socket.on ("code-change", (roomID, newCode) => {
    roomCode.set(roomID, newCode);
    socket.to(roomID).emit('code-update', newCode);
  })
  
});

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});