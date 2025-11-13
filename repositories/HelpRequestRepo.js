const Repository = require('./Repository.js');
const HelpRequest = require('../models/helpRequest.model.js');
const Location = require('../models/location.model.js');
const Status = require('../models/status.model.js');
const Priority = require('../models/priority.model.js');

class HelpRequestRepo extends Repository {
    constructor() {
        super(HelpRequest);
    }
    //שליפה של כל הבקשות עזרה
    async getAll(query) {
        const helpRequests = await HelpRequest.find(query);
        const [statuses, locations, priorities] = await Promise.all([
            Status.find(),
            Location.find(),
            Priority.find()
        ]);
        const result = helpRequests.map(request => ({
            ...request.toObject(),
            status: statuses.find(s => s.status_code === request.status_code)?.status_name || null,
            location: locations.find(l => l.city_code === request.location_id)?.city_name || null,
            priority: priorities.find(p => p.priority_code === request.priority_code)?.priority_description || null
        }));
        return result;
    }
    //שליפת בקשה לפי ה-id
    async get(HelpRequestId) {
        return await HelpRequest.findOne({ helpRequestId: HelpRequestId });
    }
     //עידכון הבקשה עם קוד המתנדב
    //  על פי קוד הבקשב הוא מעדכן לי את המתנדב של אותה בקשה ואת סטטוס הבקשה
    async update(helpRequestId, volunteerCode) {
        try {
            return await HelpRequest.findOneAndUpdate(
                { helpRequestId: helpRequestId },
                {
                    volunteer_code: volunteerCode,
                    status_code: 2,
                },
                { new: true }
            );
        }
        catch (error) {
            console.error('Error updating help request:', error);
            throw error;
        }
    }


}

module.exports = new HelpRequestRepo();
