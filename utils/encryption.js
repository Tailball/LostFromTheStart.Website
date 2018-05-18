const bcrypt = require("bcrypt");

const config = require("../configuration/serverconfig");

const saltRounds = 5;

const hashPassword = function (password) {
  bcrypt.hash(password, saltRounds, function (err, hash) {
    //outputs hash
    //no longer required
  })
};

const comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    const hash = config.passwordHash;

    console.log(">> config: " + config);
    console.log(">> hash: " + hash);

    bcrypt.compare(password, hash, function (err, res) {
      if (err !== undefined) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const compareCredentials = async function (username, password) {

  console.log("> username: " + username);
  console.log("> password: " + password);

  const passMatch = await comparePassword(password);
  const userMatch = username === config.username;

  return (userMatch && passMatch);
}

module.exports = {
  hashPassword,
  compareCredentials
};