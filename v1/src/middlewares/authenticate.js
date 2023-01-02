const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  //get token data req
  const authHeader = req.headers["authorization"];
  //toke data
  const token = authHeader && authHeader.split(" ")[1];
  //if null token data send error
  if (token === null) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "this proccess than before login " });
  }
  // console.log(token);

  //verify jwt token for authenticate
  JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err });
    //user infermation get req.user;
    req.user = user?.dataValues;
    next();
  });
};

module.exports = authenticateToken;
