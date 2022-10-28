let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the model
let Individual = require('../models/individual');

module.exports.displayIndividualList = (req,res,next)=>{
    Individual.find((err,individualList) =>{
        if(err){
            return console.log(err);
        }
        else{
            //console.log(IndividualList);
            res.render('individual/list',
            {title: 'Contact Lists', 
            IndividualList: individualList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    })
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('individual/add',{title: 'Add Individual', 
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req,res,next) =>{
    let newIndividual = Individual({
        "name":req.body.name,
        "address":req.body.address,
        "email":req.body.email
    });

    Individual.create(newIndividual, (err,Individual)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the individual list
            res.redirect('/individual-list');
        }

    })
}

module.exports.displayEditPage = (req,res,next) =>{
    let id = req.params.id;
    Individual.findById(id,(err,individualToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('individual/edit',{title: 'Edit Individual',individual:individualToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    })
}

module.exports.processEditPage = (req,res,next) =>{
    let id = req.params.id;
    let updatedIndividual = Individual({
        "_id":id,
        "name":req.body.name,
        "address":req.body.address,
        "email":req.body.email
    })

    Individual.updateOne({_id:id}, updatedIndividual, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/individual-list');
        }
    })
}

module.exports.performDelete = (req,res,next) =>{
    let id = req.params.id;

    Individual.remove({_id:id},(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/individual-list');
        }
    })
}