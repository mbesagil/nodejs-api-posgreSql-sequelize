const Sequelize = require("sequelize");

const sequelize = new Sequelize("example", "postgres", "password****", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("posgresql connected..");
  } catch {
    console.log("Error DB");
  }
};
module.exports = { sequelize, dbConnection };
