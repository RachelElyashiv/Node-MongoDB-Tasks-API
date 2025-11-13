const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    city_name:String,
    city_code:Number
});

const Location = mongoose.model('locations', locationSchema);

module.exports = Location;