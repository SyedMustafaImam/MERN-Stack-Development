var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const db = require('../models');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', function (req, res, next) {

  db.Course.find().sort({
    courseid: 1
  }).then(cours => {
    // console.log(JSON.stringify(cours, null, '  '));
    res.render('index', {
      title: "Course",
      courses: cours
    })
  })
});

router.get('/Edit/:id', function (req, res, next) {
  console.log(req.params.id);
  db.Course.find({
    courseid: req.params.id
  }).then(
    // course=>console.log(course)
    course => {
      res.render('edit', {
        title: 'Edit',
        course: course[0]
      });

    })

});

router.post('/Save', async function(req, res, next) {
console.log('Course :>>', req.body);

let result = await db.Course.updateOne({courseid:req.body.courseid}, {
  $set:req.body
})

// res.render('index', { title: 'Express' });
console.log(result);

res.redirect('/')
});




module.exports = router;