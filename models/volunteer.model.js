const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    volunteer_code:Number,
    first_name:String,
    last_name:String,
    phone:String,
    expertise:[String]
});

const  Volunteer = mongoose.model('volunteers', volunteerSchema);

module.exports = Volunteer;