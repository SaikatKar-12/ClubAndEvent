const express =require('express');
const VenueController = require('../../controllers/venue-controller');

const router = express.Router();
router.post('/venue',VenueController.create);
router.delete('/venue/:id',VenueController.destroy);
router.patch('/venue/:id',VenueController.update);
router.get('/venue/:id',VenueController.get);
router.get('/venue',VenueController.getAll);
// router.get('/city/:id',CityController.get);
// router.patch('/city/:id',CityController.update);

module.exports = router;