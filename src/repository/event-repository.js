const { Op } = require('sequelize');
const CrudRespository = require('./crud-repository');
const { Event } =require('../models/index');

class EventRepository extends CrudRespository{
    constructor(){
        super(Event);
    }

    async getAllEvents(filter) { // filter can be empty also
        try {
            if(filter.name) {
                const events = await Event.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return events;
            }
            const events = await Event.findAll();
            return events;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}
module.exports = EventRepository;