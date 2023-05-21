
const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorReaponse } = require('../util/common');
/**
 * post:/flight
 * req-body{
 *  name:m 3400,
 *  
    }
 */
async function createFlight(req, res) {

    try {
        const Flight = await FlightService.createFlight({
          flightNumber:req.body.flightNumber,
          airplaneId:req.body.airplaneId,
          departureAirportId:req.body.departureAirportId,
          arrivalAirportId:req.body.arrivalAirportId,
          arrivalTime:req.body.arrivalTime,
          departureTime:req.body.departureTime,
          price:req.body.price,
          boardingGate:req.body.boardingGate,
          totalSeats:req.body.totalSeats,

        })
        SuccessResponse.message = 'successfully create an Flight';
        SuccessResponse.data = Flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        console.log('error----------------------',error);
        ErrorReaponse.message = 'Something went wrong while create Flight';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * get:/airplanes
 * req-body{}
 */
async function getFlights(req, res) {

    try {
        const Flight = await FlightService.getFlights();
        console.log('airports---------'+Flight);
        SuccessResponse.message = 'successfully get Flights';
        SuccessResponse.data = Flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        console.log('airport error---------------------'+error);
        ErrorReaponse.message = 'Something went wrong while get Flights';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * post:/airplanes/:id
 * req-body{}
 */

async function getFlight(req, res) {

    try {
        const Flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.message = 'successfully get Flight';
        SuccessResponse.data = Flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while get Flight';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * post:/airplanes/:id
 * req-body{}
 */

async function distroyFlight(req, res) {

    try {
        const Flight = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.message = 'successfully distroy Flight';
        SuccessResponse.data = Flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while distroy Flight';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * post:/airplanes/:id
 * req-body{
 * capacity:200
 * }
 */

async function updateFlight(req, res) {

    try {
        const Flight = await FlightService.updateFlight(req.params.id, {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats,
        });
        SuccessResponse.message = 'successfully update Flight';
        SuccessResponse.data = Flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while update Flight';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}
module.exports = {createFlight,getFlights,getFlight,distroyFlight,updateFlight }