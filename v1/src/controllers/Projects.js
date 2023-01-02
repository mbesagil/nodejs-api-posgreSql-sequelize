const httpStatus = require("http-status");
const {
  list,
  insert,
  getByUserIdlist,
  modify,
  remove,
} = require("../services/Projects");

const index = (req, res) => {
  list()
    .then((projects) => {
      res.status(httpStatus.OK).send(projects);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });
};

getByUserIdIndex = (req, res) => {
  getByUserIdlist(req.user.id)
    .then((userProject) => {
      res.status(httpStatus.OK).send(userProject);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });
};

const create = (req, res) => {
  insert(req.body, req.user.id)
    .then((projectsData) => {
      res.status(httpStatus.OK).send(projectsData);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: "There was a problem during registration",
        error: error,
      });
    });
};

const update = (req, res) => {
  // console.log(req.params.id);
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Id infermotion crash",
    });
  }

  modify(req.params?.id, req.body)
    .then((updatedProject) => {
      res.status(httpStatus.OK).send({ message: "project updated" });
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "There was a problem during registration" })
    );
};

const deleteProject = (req, res) => {
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Id infermotion crash",
    });
  }

  remove(req.params?.id)
    .then((deleteProject) => {
      if (!deleteProject) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "this project not found" });
      }
      res.status(httpStatus.OK).send({ message: `project deleted` });
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "There was a problem during registration" })
    );
};

module.exports = {
  index,
  getByUserIdIndex,
  create,
  update,
  deleteProject,
};
