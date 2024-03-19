const { VenueRepository }= require('../repository/index');
class VenueService{
    constructor(){
        this.venueRepository = new VenueRepository();
    }
    async createVenue(data){
        try{
            const venue= await this.venueRepository.createVenue(data);
            return venue;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async deleteVenue(venueId){
        try{
            const response = this.venueRepository.deleteVenue(venueId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports=VenueService;