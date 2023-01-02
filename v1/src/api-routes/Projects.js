const express = require("express");
const authenticate = require("../middlewares/authenticate")
const { index, create, getByUserIdIndex, update, deleteProject } = require("../controllers/Projects");
const validate = require("../middlewares/validate");
const { createValidation, updateValidation } = require("../validations/Projects");
const router = express.Router();

router.route("/").get(authenticate,index);
router.route("/").post(authenticate,validate(createValidation), create);
router.route("/getByUserId").get(authenticate, getByUserIdIndex);
router.route("/:id").patch(authenticate, validate(updateValidation), update);
router.route("/:id").delete(authenticate, deleteProject);


module.exports = router;
