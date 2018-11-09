const uuid = require('uuid');

module.exports = (req, res) => {
  res.end(`Hello from Node.js: ${uuid.v4()}`);
};