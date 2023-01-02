const Projects = require("../models/Projects");

const list = () => {
  return Projects.findAll();
};

const getByUserIdlist = async (id) => {
  const projects = await Projects.findAll({ where: { user_id: id } });
  return projects;
};

const insert = async (data, userId) => {
  projectData = {
    user_id: userId,
    ...data,
  };
  const project = await Projects.create(projectData);
  return project;
};

const modify = async (id, data) => {
  const project = await Projects.update(
    { ...data },
    {
      where: { id: id },
    }
  );

  return project;
};

const remove = async (id) => {
  const project = await Projects.destroy({
    where: {
      id: id,
    },
  });
  return project;
};

module.exports = {
  list,
  getByUserIdlist,
  insert,
  modify,
  remove,
};
