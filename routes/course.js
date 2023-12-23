const express = require('express');
const router = express.Router();
const courseCtrl = require( '../controllers/course' );


router.get("/getAllCourses", courseCtrl.getAllCourses );
router.put("/addMarks/:cid/:sid", courseCtrl.addMarks);

module.exports = router;