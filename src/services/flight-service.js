const { FlightsRepositry } = require('../repositary')
const { AppError } = require('../util/error/app-error');
const { StatusCodes } = require('http-status-codes')
const flightRepositary = new FlightsRepositry();
async function createFlight(data) {
    try {
        const airplane = await flightRepositary.create(data);
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}
async function getFlights() {
    try {
        const flight = await flightRepositary.getAll();
        return flight;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepositary.get(id);
        return flight;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane request is not present', error.statusCode);
        }
        throw error;
    }
}
async function destroyFlight(id) {
    try {
        const flight = await flightRepositary.destroy(id);
        return flight;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not distroy Airplane', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane request is not present', error.statusCode);
        }
        throw error;
    }
}
async function updateFlight(id, data) {
    try {
        const flight = await flightRepositary.update(id, data);
        return flight;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not distroy Airplane', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane request is not present', error.statusCode);
        }
        throw error;
    }
}
module.exports = {createFlight,getFlights,getFlight,destroyFlight,updateFlight};