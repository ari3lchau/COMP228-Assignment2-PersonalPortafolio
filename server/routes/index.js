/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: PERSONAL-PORTAFOLIO2
WEB APP NAME:https://comp229-008-301151530portfolio.herokuapp.com/
assignment2 lab Assignment
*/
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/index', indexController.displayHomePage);



router.get('/aboutme',indexController.displayAboutMe);

router.get('/contact',indexController.diplayContact);

router.get('/projectpage',indexController.displayProjectPage);

router.get('/service',indexController.displayServicePage);



// get route for displaying the login page 
router.get('/login', indexController.displayLoginPage );

//post route fro processing the login page -- 
router.post('/login', indexController.processLoginPage);

// get route for displaying the register page 
router.get('/register', indexController.displayRegisterPage );

//post route fro processing the register page -- 
router.post('/register', indexController.processRegisterPage);

//get to perform logout
router.get('/logout', indexController.performLogout);


module.exports = router;
