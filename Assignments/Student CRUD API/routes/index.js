const index_controller= require('../controllers/index.controller')
const express = require('express');
let router = express.Router();

router.get('/', index_controller.index);
// router.use(index_controller.error)

module.exports = router;
