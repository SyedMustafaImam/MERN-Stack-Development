var express = require('express');
var router = express.Router();
const login_controller=require('../controllers/login.controller')
const signup_controller=require('../controllers/signup.controller')
router.get('/signup',signup_controller.register_form)
router.post('/signedup',signup_controller.register)
router.get('/',login_controller.login_form)
router.post('/login',login_controller.loginchk)
router.get('/index/member/:userid/edit-profile',login_controller.edit_profile)
router.post('/index/member/:userid/edit-profile',login_controller.edited_profile)
router.get('/index/member/:userid/change-password',login_controller.change_password_form)
router.post('/index/member/:userid/change-password',login_controller.changed_password)
router.get('/logout',login_controller.logout)
module.exports = router;
