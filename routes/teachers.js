const express = require('express');
let router = express.Router();
let teacher_controller = require("../controllers/teacher.controller");

router.get('/', teacher_controller.teacher)
router.get('/add', teacher_controller.addStudent)
router.post('/addnewsave', teacher_controller.addnewsave)
router.get('/list', teacher_controller.listStudent)
router.get('/edit', teacher_controller.editStudent)
router.post('/save', teacher_controller.saveStudent)
router.delete('/delete', teacher_controller.deleteStudent)

module.exports = router;
