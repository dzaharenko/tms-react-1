const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg) {
    console.log(`message from ${socket.name}: ${msg}`);

    io.emit('chat message', `${socket.name}: ${msg}`);
  });

  socket.on('setName', function(name) {
    socket.name = name;
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
