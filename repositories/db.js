const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/my_database;');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to db. please try later...');
    }
}

module.exports = { connect };