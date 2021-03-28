var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res, next) {
  res.render('rest/index', {
    title: "REST Express",
  })
});

router.get('/xhr-list', function (req, res, next) {
  db.Course.find().sort({ courseid: 1 }).then(cours => {
    res.status(200).json(cours);
  })
});

router.get('/xhr-edit', function (req, res, next) {
  console.log(`id = `,req.query.courseid);
  db.Course.find({
    courseid: req.query.courseid
  }).then(
    // course=>console.log(course)
    course => {
    res.status(200).json(course[0]);
      
    })
});

router.post('/xhr-save', async function (req, res, next) {
  console.log('Course :>>', req.body);
  let result = await db.Course.updateOne({
    courseid: req.body.courseid
  }, {
    $set: req.body
  })
  // res.render('index', { title: 'Express' });
  res.send(result);
});

module.exports = router;