const router = require("express").Router();
const { register } = require("../../controllers/authController");
const { registerValidation } = require("../../validators/authValidator");

router.post("/", registerValidation, register);

module.exports = router;
