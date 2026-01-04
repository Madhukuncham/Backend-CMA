const router = require("express").Router();
const { login } = require("../../controllers/authController");
const { loginValidation } = require("../../validators/authValidator");

router.post("/", loginValidation, login);

module.exports = router;
