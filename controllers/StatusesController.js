const Controller = require('./Controller.js');
const statusService = require('../services/StatusService.js');

class StatusController extends Controller {
    constructor() {
        super(statusService)
    }
   
}
module.exports = new StatusController();
