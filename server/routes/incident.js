let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Incident Model
let Book = require('../models/incident');

let incidentController = require('../controllers/incident');



/* GET Route for the Book List page - READ Operation */
router.get('/', incidentController.displayIncidentList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', incidentController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', incidentController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', incidentController.displayEditPage);

/* 
* POST Route for processing the Edit page - UPDATE Operation 
*/
router.post('/edit/:id', incidentController.processEditPage);

/*
*  GET to perform  Deletion - DELETE Operation 
*/
router.get('/delete/:id',incidentController.performDelete);

/* GET to Show All Incidents -  */
router.get('/dashboard', incidentController.displayDashboard);

/* GET to perform Deletion From DashBoard - DELETE operation */
router.get('/dashboard/delete/:id', incidentController.performDeleteFromDashBoard);

module.exports = router;