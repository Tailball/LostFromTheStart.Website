var express = require('express');

var server = express();
var port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send('Welcome to root');
});

server.listen(port, () => console.log("Server running, now listening..."));