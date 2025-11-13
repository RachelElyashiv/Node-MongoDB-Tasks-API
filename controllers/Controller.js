const autoBind = require('auto-bind');

class Controller {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const result = await this.service.getAll(req.query);  
            return res.json(result);
            
        } catch (e) {
            console.error("Error occurred:", e.message);  
            next(e);
        }
    }
    async get(req, res, next) {
        const { Id } = req.params;

        try {
            const result = await this.service.get(Id);
            return res.status(200).json({
                data: result
            });
           
        } catch (e) {
            next(e);
        }
    }

    async insert(req, res, next) {
        try {
            const result = await this.service.insert(req.body);
            return res.status(201).json({
                message: 'Data inserted successfully',
                data: result
            });
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        const { Id } = req.params;
        const { Data }= req.body;
        try {
            const result = await this.service.update(Id, Data);

            return res.status(201).json({
                message: 'Data updated successfully',
                data: result
            });
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;

        try {
            const result = await this.service.delete(id);

            return res.status(20).json({
                message: 'The item was deleted successfully.',
                data: result
            });
        } catch (e) {
            next(e);
        }
    }

}
module.exports = Controller

