const Sequelize = require("sequelize");
const {sequelize} = require("../loaders/postgreDb");

const User = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
  },
  lname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
