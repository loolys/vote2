'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

let server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

const socket = require('socket.io');

let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('New connection on socket ' + socket.id);

  socket.on('updatePoll', updatePoll);

  function updatePoll(data) {
    console.log('updatePoll: ' + data);
    socket.broadcast.emit('updatePoll', data);
  }
}
