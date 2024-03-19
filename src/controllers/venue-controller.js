const {VenueService} = require('../services/index');

const venueService= new VenueService();

const create =async (req,res)=>{
    try {
        const venue = await venueService.createVenue(req.body);
        return res.status(201).json({
            data: venue,
            success:true,
            message: 'succesfully created a venue',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a venue',
            err: error
        });
    }
}
const destroy = async (req,res)=>{
    try {
        const response = await venueService.deleteVenue(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully deleted the venue',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the venue',
            err: error
        });
    }

}
module.exports={
    create,
    destroy,
}