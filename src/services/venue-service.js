const CrudService = require('./crud-service');
const { VenueRepository }= require('../repository/index');
class VenueService extends CrudService{
    constructor(){
        const venueRepository =new VenueRepository();
        super(venueRepository);
    }
}

module.exports=VenueService;