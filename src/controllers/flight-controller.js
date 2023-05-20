
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
        const airport = await FlightService.createFlight({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        })
        SuccessResponse.message = 'successfully create an airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while create airport';
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
        const airport = await FlightService.getFlights();
        console.log('airports---------'+airport);
        SuccessResponse.message = 'successfully get airports';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        console.log('airport error---------------------'+error);
        ErrorReaponse.message = 'Something went wrong while get airports';
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
        const airport = await FlightService.getFlight(req.params.id);
        SuccessResponse.message = 'successfully get airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while get airport';
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
        const airport = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.message = 'successfully distroy airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while distroy airport';
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
        const airport = await FlightService.updateFlight(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        SuccessResponse.message = 'successfully update airport';
        SuccessResponse.data = await FlightService.getAirport(req.params.id);
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorReaponse.message = 'Something went wrong while update airport';
        ErrorReaponse.error = error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}
module.exports = {createFlight,getFlights,getFlight,distroyFlight,updateFlight }