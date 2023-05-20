const {AirportRepositry} = require('../repositary')
const { AppError } = require('../util/error/app-error');
const { StatusCodes } = require('http-status-codes')
const airportRepositry = new AirportRepositry();

async function createAirport(data) {
    try {
        const airplane = await airportRepositry.create(data);
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
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
async function getAirports() {
    try {
        const airplane = await airportRepositry.getAll();
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
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

async function getAirport(id) {
    try {
        const airplane = await airportRepositry.get(id);
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport request is not present', error.statusCode);
        }
        throw error;
    }
}
async function destroyAirport(id) {
    try {
        const airplane = await airportRepositry.destroy(id);
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not distroy Airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport request is not present', error.statusCode);
        }
        throw error;
    }
}
async function updateAirport(id, data) {
    try {
        const airplane = await airportRepositry.update(id, data);
        return airplane;
    } catch (error) {
        if (error.name == "TypeError") {
            throw new AppError('Can not distroy Airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport request is not present', error.statusCode);
        }
        throw error;
    }
}
module.exports = { createAirport, getAirports, getAirport, destroyAirport,updateAirport};