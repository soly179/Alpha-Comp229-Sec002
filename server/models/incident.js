let mongoose = require('mongoose');

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