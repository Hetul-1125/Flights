const { AirplaneRepositry } = require('../repositary')
const { AppError } = require('../util/error/app-error');
const { StatusCodes } = require('http-status-codes')
const airplaneRepositry = new AirplaneRepositry();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepositry.create(data);
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
async function getAirplanes() {
    try {
        const airplane = await airplaneRepositry.getAll();
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

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepositry.get(id);
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
        } else if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane request is not present', error.statusCode);
        }
        throw error;
    }
}
async function destroyAirplane(id) {
    try {
        const airplane = await airplaneRepositry.destroy(id);
        return airplane;
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
async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneRepositry.update(id, data);
        return airplane;
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
module.exports = { createAirplane, getAirplanes, getAirplane, destroyAirplane,updateAirplane};