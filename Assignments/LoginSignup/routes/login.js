var express = require('express');
var router = express.Router();
var login = require('../controller/login.controller')

router.get('/', login.get_login);
router.post('/', login.post_login);

router.get('/signup', login.get_signup);
router.post('/signup', login.post_signup);

router.post('/logout', login.post_signup);


module.exports = router;
