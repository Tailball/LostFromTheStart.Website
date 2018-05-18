const log = function(req, res, next) {
  console.log(`New request from ${req.ip} to ${req.method} ${req.originalUrl}`);
  
  next();
};

module.exports = log; 