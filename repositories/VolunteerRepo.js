const Repository = require('./Repository.js');
const Volunteer = require('../models/volunteer.model.js');
class VolunteerRepo extends Repository {
    constructor() {
        super(Volunteer);
    }
    //בדיקה אם המתנדב קיים לפי ה-id
    async getById(VolunteerCode){
        let foundVolunteer = await Volunteer.findOne({volunteer_code : VolunteerCode})
        return foundVolunteer
    }
    //בדיקה האם המתנדב כבר רשום במערכת
    async CheckIsExists(volunteerData){
        let foundVolunteer = await Volunteer.findOne({ 
            first_name:volunteerData.first_name,
            last_name:volunteerData.last_name,
            phone:volunteerData.phone })
        return foundVolunteer
    }
    //חישוב הקוד מתנדב
    async getMaxVolunteerCode(){
        let maxVolunteerCode = await Volunteer.findOne().sort({volunteer_code: -1}).select('volunteer_code');
        return maxVolunteerCode? maxVolunteerCode.volunteer_code : 0;
    }
    
}
module.exports = new VolunteerRepo();