var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
    db.Course.find().sort({courseid: 1})
        .then(courses => {
            res.render('index', 
            { 
                title: 'Express', 
                courses: courses 
            });
            //console.log(courses);
        })
});

router.get('/Edit/:id', function(req, res, next) {
    console.log('Id :>> ', req.params.id);
    db.Course.find({courseid: req.params.id})
    .then(course =>{
        res.render('edit', { 
            title: 'Edit', 
            course: course[0] 
        });
    })
  
});

router.post('/Save', async function(req, res, next) {
  console.log('Course :>> ', req.body);

  let result = await db.Course.updateOne({ courseid : req.body.courseid }, {
      $set: req.body
  })

  console.log(result);

  res.redirect('/');
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
