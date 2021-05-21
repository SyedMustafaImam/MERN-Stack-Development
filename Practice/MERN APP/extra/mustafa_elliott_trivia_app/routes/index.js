const index_controller= require('../controllers/index.controller')
const express = require('express');
let router = express.Router();

router.get('/admin', index_controller.admin);
router.get('/member/:userid', index_controller.member);


module.exports = router;
