const httpStatus = require("http-status");
const { list, insert, loginUser } = require("../services/Users");

const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/helper");

const index = (req, res) => {
  list()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });
};

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  insert(req.body)
    .then((userData) => {
      res.status(httpStatus.OK).send(userData);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
      // console.log(user.password);
      // res.send(user);
      // return false
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found" });
      }

      user = {
        ...user.dataValues,
        token: {
          access_token: generateAccessToken(user),
          refresh_token: generateRefreshToken(user),
        },
      };

      delete user.password;
      res.status(httpStatus.OK).send(user);
    })
    .catch((err) => {
      res.send(err);
    });
};

const update = (req, res) => {
  console.log(req.body.error);
};

module.exports = {
  index,
  create,
  login,
  update,
};
