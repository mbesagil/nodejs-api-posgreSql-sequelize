const express = require("express");
const { index, create,login , update } = require("../controllers/Users");
const validate = require("../middlewares/validate");
const schemas = require("../validations/Users");
const router = express.Router();

router.route("/").get(index);
router.route("/").post(validate(schemas.createValidation),create);
router.route("/login").post(validate(schemas.loginValidation), login);
router.route("/:id").patch(update);

module.exports = router;
