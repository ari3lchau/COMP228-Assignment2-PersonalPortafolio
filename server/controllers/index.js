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
let mongoose = require('mongoose');
let passport = require('passport');
//define individual model indtance
let userModel = require('../models/user');
let User = userModel.User; //alias



module.exports.displayHomePage = (req,res,next) => {
    res.render('index',{title:'Home',displayName: req.user? req.user.displayName : ''});
} 

module.exports.displayAboutMe = (req,res,next) => {
    res.render('aboutme',{ title: 'About me Page' ,displayName: req.user? req.user.displayName : ''});
}

module.exports.diplayContact = (req,res,next) => {
    res.render('contact',{ title: 'Contact Page' ,displayName: req.user? req.user.displayName : ''});
}

module.exports.displayProjectPage = (req,res,next) => {
    res.render('projectpage',{ title: 'Project Page',displayName: req.user? req.user.displayName : '' });
}

module.exports.displayServicePage = (req,res,next) => {
    res.render('service',{ title: 'Service Page',displayName: req.user? req.user.displayName : '' });
}


module.exports.displayLoginPage = (req,res,next) => {
    //check if user is alreayd logged in

    if(!req.user){
        res.render('auth/login',{
            title: "Login",
            messages:req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',(err,user,info) => {
        //server error?
        if(err)
        {
            return next(err);
        }
        //is there a user login error
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            return res.redirect('/login');
        }
        req.login(user,(err) =>{
            //server error
            if(err){
                return next(err);
            }
            return res.redirect('/individual-list');
        });
        

    }) (req,res,next);
}


module.exports.displayRegisterPage = (req,res,next) =>{
    //check if user is not login
    if(!req.user){
        res.render('auth/register',{
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req,res,next) =>{
    // instanciate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password
        email: req.body.email,
        displayName: req.body.displayName

    })

    User.register(newUser, req.body.password, (err)=>{
        if(err){
            console.log("Error: Inserting new User");
            if(err.name == "UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log("Error: User Already Exist");
            }
            return res.render('auth/register',{
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            })
        }
        else{
            // if no error exists, then registration is succesful 
            //redirec the user and authenticate

            return passport.authenticate('local')(req,res, ()=>{
                res.redirect('/individual-list');
            });
        }
    })
}

module.exports.performLogout = (req,res,next) =>{
    req.logout(function(err){
        if(err) {
            return next(err);
        }
        res.redirect('/');
    })
}