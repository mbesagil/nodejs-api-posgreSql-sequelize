const Sequelize = require("sequelize");
const {sequelize} = require("../loaders/postgreDb");

const User = sequelize.define("projects", {
  user_id: {
    type:Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
