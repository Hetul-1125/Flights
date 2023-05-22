
// const { AirplaneMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();
const {FlightController } = require('../../controllers');
// api/v1/airplanes POST
router.post('/',
        // AirplaneMiddleware.vailidateCreateRequest, 
        FlightController.createFlight);

// api/v1/airplanes GET
// router.get('/',
//         FlightController.getFlights);
        
router.get('/',
        FlightController.getAllFlights);
// api/v1/airplanes/:id POST
router.get('/:id',
        FlightController.getFlight);

// api/v1/airplanes/:id POST
router.delete('/:id',
        FlightController.distroyFlight);

// api/v1/airplanes/:id POST
router.patch('/:id',
        FlightController.updateFlight);

module.exports = router