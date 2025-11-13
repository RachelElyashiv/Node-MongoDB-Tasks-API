const Service = require('./Service.js');
const repo = require('../repositories/LocationRepo.js')


class LocationService extends Service {
    constructor() {
        super(repo);
    }

}

module.exports = new LocationService();