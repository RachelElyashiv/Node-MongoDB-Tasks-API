const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
    priority_code:Number,
    priority_description:String

});

const Priority = mongoose.model('priorities', prioritySchema);

module.exports = Priority;

