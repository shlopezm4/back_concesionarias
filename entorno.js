const dotenv = require("dotenv");

function verifyEnvironment() {
  return dotenv.config({ path: ".env" });
}

module.exports.verifyEnvironment = verifyEnvironment;
