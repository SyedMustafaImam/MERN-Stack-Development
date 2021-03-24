const express = require('express');
let router = express.Router();
let student_controller = require('../controllers/student.controller');

router.get('/', student_controller.student)

module.exports = router;
