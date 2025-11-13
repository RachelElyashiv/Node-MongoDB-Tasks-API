const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    location_id: Number,
    description:String,
    contact_phone:String,
    people_stuck:Number,
    helpRequestId:Number,
    volunteer_code: { type: Number, required: false },
    status_code: Number,
    priority_code: Number,
   
});

const HelpRequest = mongoose.model('help_requests', helpRequestSchema);

module.exports = HelpRequest;