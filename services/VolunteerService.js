const Service = require('./Service.js');
const repo = require('../repositories/VolunteerRepo.js')


class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
    // הכנסת מתנדב חדש למערכת
    async insert(volunteerData) {
        if (!volunteerData.first_name || !volunteerData.last_name || !volunteerData.phone || volunteerData.expertise < 1) {
            throw new Error('Missing required fields: first_name, last_name, phone or expertise');
        }
        const foundVolunteer = await repo.CheckIsExists(volunteerData);
        if (foundVolunteer) {
            return 'The volunteer already exists in the system and this is his code:' + foundVolunteer.volunteer_code;
        }
        const maxVolunteerCode = await repo.getMaxVolunteerCode();
        const newVolunteerCode = maxVolunteerCode + 1;

        volunteerData.volunteer_code = newVolunteerCode;

        const savedVolunteer = await super.insert(volunteerData);
        return savedVolunteer.volunteer_code;
    }




}

module.exports = new VolunteerService();