/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: PERSONAL-PORTAFOLIO2
WEB APP NAME:https://comp229-008-301151530portfolio.herokuapp.com/
assignment2 lab Assignment
*/
let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");


let passport = require('passport');

//helper function for guard purposes
function requireAut(req,res,next){
    //check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}
//connect to Contact Model

//let Individual = require('../models/individual');

let individualController = require('../controllers/individual');
//get route for the individual page - read oepration
router.get('/',individualController.displayIndividualList);


// get route for displaying the add page create operation
router.get('/add', requireAut,individualController.displayAddPage );

//post route fro processing the add page -- create operation
router.post('/add', requireAut,individualController.processAddPage);

//get route for displaying the edit page -- update operation
router.get('/edit/:id', requireAut,individualController.displayEditPage);
//post route for processing the edit page -- update operation
router.post('/edit/:id', requireAut,individualController.processEditPage);
//get to perform deletion -- delete operation
router.get('/delete/:id',requireAut, individualController.performDelete );
module.exports = router;