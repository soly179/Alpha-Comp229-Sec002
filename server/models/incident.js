let mongoose = require('mongoose');

// create a model class

/**
 * add your code to 
 * create your model here
 * 
 */

let incidentModel = mongoose.Schema({
    name : String,
    customer: String,
    recordnumber:String,
    description:String,
    priority: String
},
{
    collections: "incidents"
});
module.exports = mongoose.model('Incident',incidentModel);