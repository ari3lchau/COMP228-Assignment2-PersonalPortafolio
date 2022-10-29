//require modules for the user Model
/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: PERSONAL-PORTAFOLIO2
WEB APP NAME:https://comp229-008-301151530portfolio.herokuapp.com/
assignment2 lab Assignment
*/
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");
let User = mongoose.Schema
(
    {
        username: 
        {
            type:String,
            default:"",
            trim:true,
            required:'username is required'
        },
        /*
        password:
        {
            type:String,
            default:"",
            trim:true,
            required:"passwor id required"
        }
        
        */
       email:
       {
            type:String,
            default:"",
            trim:true,
            required:'email address is required'
       },
       displayName:
       {
            type:String,
            default:"",
            trim:true,
            required:'Display Name is required'
       },
       created:
       {
            type:Date,
            default:Date.now
        
       },
       update:
       {
            type:Date,
            default:Date.now
            
       }

    },
    {
        collection: "users"
    }
);

//configure options for User Model
let options = ({missingPasswordError: 'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);

