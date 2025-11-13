const Service = require('./Service.js');
const repo = require('../repositories/PriorityRepo.js')


class PriorityService extends Service {
    constructor() {
        super(repo);
    }

}

module.exports = new PriorityService();