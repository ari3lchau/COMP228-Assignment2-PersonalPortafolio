/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: PERSONAL-PORTAFOLIO2
WEB APP NAME:https://comp229-008-301151530portfolio.herokuapp.com/
Midterm lab Assignment
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
