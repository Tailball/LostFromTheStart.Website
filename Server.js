const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const preorders = require("./api/routes/preorders");

const config = require("./configuration/serverconfig");
const debuglogger = require("./middleware/debuglogger");


//configure server
const server = express();
const port = process.env.PORT || 5000;

if (config.environment === "DEBUG") {
  server.use(debuglogger);
}

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));


//configure server routes
//server.use('/', undefined); //root -> static website
server.use("/api/preorders", preorders);


//configure mongoDB
mongoose.connect(config.dbUri, () => console.log(" > Connected to Lost From The Start database."));


//start server
server.listen(port, () => console.log(" > Lost From The Start API server running, now listening..."));