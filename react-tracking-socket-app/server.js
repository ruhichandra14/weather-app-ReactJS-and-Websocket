const express = require('express');
const socketIo = require('socket.io');
const axios = require('axios');
const port = 5000;

var cors = require('cors');
const index = require('./routes/index');
//const server = http.createServer(app);

// method 1
var app = express();
const http = require('http');
app.use(index);
var server = app.listen(5000);
var io = require('socket.io').listen(server);

app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true
  })
);

app.use(function(req, res, next) {
  req.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  req.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  req.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

const getApiAndEmit = socket => {
  try {
    axios
      .get(
        'https://api.darksky.net/forecast/d02942db65a1b0fe8880d849c8a5f367/43.7695,11.2558'
      )
      .then(response => {
        console.log(response);
        socket.emit('FromAPI', response);
      });
  } catch (error) {
    console.error('Error...: ', error);
  }
};

io.on('connection', socket => {
  console.log('New client connected'),
    setInterval(() => getApiAndEmit(socket), 10000);
  socket.on('disconnect', () => console.log('Client disconnected'));
});
