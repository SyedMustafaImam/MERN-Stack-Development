var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST Login. */
router.post('/login', function(req, res, next) {
  console.log('User Name :>> ', req.body.username);
  console.log('Password :>> ', req.body.password);
 let valid = false;
 
 if(req.body.username=='syed'){
   valid = true;
 }
  res.render('index', { 
    title: 'Express',
    login: valid
  });

});

module.exports = router;
