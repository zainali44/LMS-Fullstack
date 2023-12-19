const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/course");

router.post("/add", courseCtrl.addCourse);
router.get("/students/:code", courseCtrl.getStudents);

module.exports = router;
