const express = require('express');
const http = require('http');

const preorder = require('./api/routes/preorder');
const shows = require('./api/routes/shows');


//configure server
const server = express();
const port = process.env.PORT || 5000;


server.use(express.json());
server.use(express.urlencoded( { extended: false }));


//configure routes
server.use('/', express.static('./client/build'));
server.use('/api/preorder', preorder);
server.use('/api/shows', shows);


//start server
server.listen(port, () => console.log(' > Lost From The Start API server running, now listening...'));

const herokuKeepAliveTime = 500000;
setInterval(() => {
  console.log('keeping alive...');
  http.get('http://lostfromthestart.herokuapp.com', () => console.log('http get succesful'));
}, herokuKeepAliveTime);