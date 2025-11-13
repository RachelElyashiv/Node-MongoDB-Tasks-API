const Controller = require('./Controller.js');
const helpRequestService = require('../services/HelpRequestService.js');

class HelpRequestController extends Controller {
    constructor() {
        super(helpRequestService)
    }
}

module.exports = new HelpRequestController();