let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


// create a reference to the model
let Incident = require('../models/incident');

module.exports.displayIncidentList = (req, res, next) => {
    Incident.find((err, incidentList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {         
            res.render('incident/list', {title: 'Incident Records', IncidentList: incidentList,
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('incident/add', {title: 'Add Incident',
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newIncident = Incident({
        "name": req.body.name,
        "customer": req.body.customer,
        "recordnumber": req.body.recordnumber,
        "description": req.body.description,
        "priority": req.body.priority
    });

    Incident.create(newIncident, (err, Incident) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/incident-list');
        }
    });
}

/*Get Route for dispalying the Edit page - UPDATE OPERATION*/
module.exports.displayEditPage = (req, res, next) => {
    let id =req.params.id;
    Incident.findById(id,(err,incidentToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit-view
            res.render('incident/edit',{title:'Edit Incident', incident: incidentToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

/*Get Route for processing the Edit page - UPDATE OPERATION*/
module.exports.processEditPage =(req, res, next) => {
    let id = req.params.id
    let updatedIncident = Incident({
        "_id" :id,
        "name": req.body.name,
        "customer": req.body.customer,
        "recordnumber": req.body.recordnumber,
        "description": req.body.description,
        "priority": req.body.priority
    });
    Incident.updateOne({_id:id}, updatedIncident,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the incidentlist
            res.redirect('/incident-list');
        }

    });
}

/*Get to performDELETION - DELETION OPERATION*/
module.exports.performDelete =(req, res, next) => {
    let id = req.params.id;
    Incident.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{      
            res.redirect('/incident-list');
        }
    });
}