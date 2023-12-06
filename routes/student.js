const express = require('express');
const router = express.Router();
const studentCtrl = require('../controllers/student');

router.post('/add', studentCtrl.addStudent);

module.exports = router;