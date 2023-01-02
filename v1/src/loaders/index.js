const { dbConnection } = require("./postgreDb");

module.exports = () => {
  dbConnection();
};
