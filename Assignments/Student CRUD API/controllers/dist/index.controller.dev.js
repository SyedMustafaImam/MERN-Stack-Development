"use strict";

var express = require('express');

var app = express();
var router = express.Router();

exports.index = function (req, res) {
  res.render('index', {
    title: "HOME"
  });
};

exports.error = function (req, res) {
  res.render('error', {
    title: "Error"
  });
};