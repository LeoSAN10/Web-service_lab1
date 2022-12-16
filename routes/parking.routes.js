const Router = require('express');
const router = new Router;
const ParkingController  = require('../controller/parking.controller');

router.post('/parking', ParkingController.createParking);
router.get('/parking', ParkingController.getParkingsByDriver);

module.exports = router;
