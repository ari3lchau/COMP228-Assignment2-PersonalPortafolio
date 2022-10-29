/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: PERSONAL-PORTAFOLIO2
WEB APP NAME:https://comp229-008-301151530portfolio.herokuapp.com/
Midterm lab Assignment
*/
let mongoose = require('mongoose');
//create a model class

let individualModel = mongoose.Schema({
    name:String,
    address:String,
    email:String
},
{
    collection: "individuals"
});

module.exports = mongoose.model('Individual', individualModel);