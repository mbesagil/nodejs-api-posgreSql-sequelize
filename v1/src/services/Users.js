const Users = require("../models/Users");

const list = () => {
  return Users.findAll();
};

const insert = async (data) => {
  const user = await Users.create(data);
  return user;
};

const loginUser = async (loginData) => {
  const user = await Users.findOne({ where: loginData });
  return user;
};

module.exports = {
  list,
  insert,
  loginUser,
};
