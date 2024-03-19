const { Venue } =require('../models/index');

class VenueRepository{
    async createVenue({ name }){
        try{
            const venue = await Venue.create({name});
            return venue;
        }catch(error){
            throw {error};
        }
    }

    async deleteVenue(venueId){
        try{
            await Venue.destroy({
                where:{
                    id: venueId
                }
            });
        }catch(error){
            throw {error};
        }
    }

    
}

module.exports = VenueRepository;