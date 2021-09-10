var express = require('express');
var router = express.Router();
var user = require('../controller/user.controller')

/* GET users listing. */
router.get('/', user.get_users);
router.get('/single', user.get_user);
router.post('/single', user.post_user);

module.exports = router;
