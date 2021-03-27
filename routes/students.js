const express = require('express');
let router = express.Router();
let student_controller = require('../controllers/student.controller');

router.get('/', student_controller.student)
router.get('/list', student_controller.listStudent)
router.get('/edit', student_controller.editStudent)
router.post('/save', student_controller.saveStudent)


module.exports = router;