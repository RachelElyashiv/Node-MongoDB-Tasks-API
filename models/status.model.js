const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
status_code:Number,
status_name:String

});

const Status = mongoose.model('statuses', statusSchema);

module.exports = Status;