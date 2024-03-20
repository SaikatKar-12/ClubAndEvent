const CrudRespository = require('./crud-repository');
const { Venue } =require('../models/index');

class VenueRepository extends CrudRespository{
    constructor(){
        super(Venue);
    }
}

module.exports = VenueRepository;