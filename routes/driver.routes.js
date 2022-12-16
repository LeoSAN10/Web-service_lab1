const Router = require('express');
const router  = new Router();
const driverController = require('../controller/driver.controller');

router.post('/driver', driverController.createDriver);
router.get('/driver', driverController.getDrivers);
router.get('/driver/:id', driverController.getOneDriver);
router.put('/driver/', driverController.updateDriver);
router.delete('/driver/:id', driverController.deleteDriver);

module.exports = router;
