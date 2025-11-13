const Repository = require('./Repository.js');
const Status = require('../models/status.model.js');
class StatusRepo extends Repository {
    constructor() {
        super(Status);
    }

}
module.exports = new StatusRepo();