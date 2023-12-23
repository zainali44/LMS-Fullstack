const express = require("express");
const router = express.Router();
const attendanceCtrl = require("../controllers/attendance");

router.post("/mark-attendance", attendanceCtrl.markAttendance);

module.exports = router;