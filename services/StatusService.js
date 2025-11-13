const Service = require('./Service.js');
const repo = require('../repositories/StatusRepo.js')


class StatusService extends Service {
    constructor() {
        super(repo);
    }

}

module.exports = new StatusService();