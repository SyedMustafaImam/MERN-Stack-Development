var express = require('express');
var router = express.Router();
var index = require('../controller/index.controller');

/* GET home page. */
router.get('/', index.home);
router.get('/about', index.about);
router.get(`/profile`, index.profile);


module.exports = router;
