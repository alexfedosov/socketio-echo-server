var e    = require('express');
var sio  = require('socket.io');
var http = require('http');

var app = e();
var server = http.createServer( app );

var io  = sio.listen(server);

io.sockets.on('connection', function(socket) {
  socket.on('message', function(msg) {
  	console.log('Receive message :' + msg);
    socket.emit('message', msg);
  });
});

server.listen(3000);
console.log('Server started at localhost:3000');
console.log('Waiting for messages..');