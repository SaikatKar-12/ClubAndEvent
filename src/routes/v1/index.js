const express =require('express');
const VenueController = require('../../controllers/venue-controller');
const ClubController = require('../../controllers/club-controller');

const router = express.Router();
router.post('/venue',VenueController.create);
router.delete('/venue/:id',VenueController.destroy);
router.patch('/venue/:id',VenueController.update);
router.get('/venue/:id',VenueController.get);
router.get('/venue',VenueController.getAll);

router.post('/club',ClubController.create);
router.delete('/club/:id',ClubController.destroy);
router.patch('/club/:id',ClubController.update);
router.get('/club/:id',ClubController.get);
router.get('/club',ClubController.getAll);
// router.get('/city/:id',CityController.get);
// router.patch('/city/:id',CityController.update);

module.exports = router;