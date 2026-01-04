const router = require("express").Router();
const authenticate = require("../middleware/authMiddleware");
const controller = require("../controllers/courseController");

router.post("/courses", authenticate, controller.createCourse);
router.get("/courses", authenticate, controller.getCourses);
router.get("/courses/:id", authenticate, controller.getCourseById);
router.put("/courses/:id", authenticate, controller.updateCourse);
router.delete("/courses/:id", authenticate, controller.deleteCourse);

module.exports = router;
