const Service = require('./Service.js');
const repo = require('../repositories/HelpRequestRepo.js')
const VolunteerRepo = require('../repositories/VolunteerRepo.js')

class HelpRequestService extends Service {
    constructor() {
        super(repo);
    }
    //שליפת הבקשות עפ"י הסינון שנשלח
    async getAll(query) {
        try {
            const filter = {};
            if (query.status) {
                filter.status_code = query.status;
            }
            if (query.location) {
                filter.location_id = query.location;
            }
            if (query.priority) {
                filter.priority_code = query.priority;
            }
            const results = await this.repo.getAll(filter);
            return results;
        }
        catch (error) {
            throw Error('Error getting the list of data');
        }
    }
    //עידכון הבקשה עם הקוד מתנדב שנשלח
    async update(helpRequestId, volunteerCode) {
        try {
            const Findvolunteer = await VolunteerRepo.getById(volunteerCode);
            if (!Findvolunteer) {
                throw new Error(`Volunteer with code: ${volunteerCode} not found, Please register`);
            }
            const helpRequest = await this.repo.get(helpRequestId);
            if (!helpRequest) {
                throw new Error('Help request not found');
            }
            if (helpRequest.status_code == 2 ) {
                throw new Error('Help request is already completed');
            }
            if (helpRequest.volunteer_code != null) {
                throw new Error('The help request is being made by a volunteer, please select a different help request.');
            }

            const updatedRequest = await this.repo.update(helpRequestId, volunteerCode);
            if (!updatedRequest) {
                throw new Error('Help request not found or update failed');
            }
            return updatedRequest;
        }
        catch (error) {
            console.error('Error assigning volunteer to help request:', error);
            throw error;
        }
    }
   

    
}

module.exports = new HelpRequestService();
