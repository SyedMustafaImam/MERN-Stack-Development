"use strict";

var db = require('../models/index');

exports.checkUser = function (req, res) {
  var username = req.params.username;
  console.log('Request Made For Check User');
  console.log('Data Recived');
  console.log('-------------------');
  console.log(req.params);
  db.Users.findOne({
    username: username
  }).then(function (result) {
    res.send(result);
    console.log('Data to be sent to client');
    console.log(result);
  })["catch"](function (err) {
    res.send(err);
  });
};

exports.register = function (req, res) {
  // console.log('Request Made')
  // console.log('Data from Front end')
  // console.log('-------------------')
  // console.log(req.body)
  var _req$body = req.body,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      username = _req$body.username,
      country = _req$body.country,
      email = _req$body.email,
      password = _req$body.password,
      gender = _req$body.gender;

  if (!firstName || !lastName || !username || !country || !email || !password || !gender) {
    console.log('Incomplete Data from front end');
    res.status(422).json({
      error: "All feilds not filled"
    });
  } else {
    db.Users.findOne({
      username: req.body.username,
      email: email
    }, function (err, exists) {
      if (exists) {
        console.log(username, "Username not acceptable"); // res.end("User name Alread exists")

        return res.status(422).json({
          error: "First User Name already exists"
        });
      } else {
        // console.log(req.body, "is acceptable")
        res.json({
          message: req.body
        });
        var reg = new db.Users({
          firstName: firstName,
          lastName: lastName,
          username: username,
          country: country,
          email: email,
          password: password,
          gender: gender
        });
        reg.save().then(function (result) {
          // res.status(201).json({ message: "User registerd Successfully" })
          console.log("saved to Mongo>>", result);
        })["catch"](function (err) {
          console.log(err);
          res.status(500).json({
            message: "Failed to register"
          });
        }); // res.redirect('/')
      }
    }).then(function (exists) {})["catch"](function (err) {
      return console.log(err);
    });
  }
};