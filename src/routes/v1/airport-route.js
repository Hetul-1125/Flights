
// const { AirplaneMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();
const { AirportController } = require('../../controllers');
// api/v1/airplanes POST
router.post('/',
        // AirplaneMiddleware.vailidateCreateRequest, 
        AirportController.createAirport);

// api/v1/airplanes GET
router.get('/',
        AirportController.getAirports);

// api/v1/airplanes/:id POST
router.get('/:id',
        AirportController.getAirport);

// api/v1/airplanes/:id POST
router.delete('/:id',
        AirportController.distroyAirport);

// api/v1/airplanes/:id POST
router.patch('/:id',
        AirportController.updateAirport);

module.exports = router