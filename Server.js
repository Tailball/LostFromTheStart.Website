const express = require('express');
const http = require('http');
const Mongoose = require('mongoose');

const cfg = require('./configuration/serverconfig');


//configure server
const server = express();
const port = process.env.PORT || 5000;


server.use(express.json());
server.use(express.urlencoded( { extended: false }));
server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  //res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


//configure db
const db = Mongoose.connect(cfg.dbUri, { useNewUrlParser: true },
  (err) => {
    console.log(' > connected to db');
    if(err) console.log(' > error in db', err);
  }
);


//configure routes
//API
server.use('/api/preorder', require('./api/routes/preorder'));
server.use('/api/shows', require('./api/routes/shows'));
server.use('/api/auth', require('./api/routes/auth'));

//CLIENT
server.use('/band', express.static('./client/build'));
server.use('/media', express.static('./client/build'));
server.use('/merch', express.static('./client/build'));
server.use('/contact', express.static('./client/build'));
server.use('/admin', express.static('./client/build'));
server.use('/', express.static('./client/build'));


//start server
server.listen(port, () => console.log(' > Lost From The Start API server running, now listening...'));


//keep alive
const herokuKeepAliveTime = 500000;
setInterval(() => {
  console.log('keeping alive...');
  http.get('http://lostfromthestart.herokuapp.com', () => console.log('http get succesful'));
}, herokuKeepAliveTime);