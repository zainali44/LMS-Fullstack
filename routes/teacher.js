const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teacher');

router.get('/getAllTeachers', teacherCtrl.getAllTeachers);
router.get('/getTeacherById/:id', teacherCtrl.getTeacherById);

module.exports = router;
