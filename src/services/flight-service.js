const { FlightsRepositry } = require('../repositary')
const { AppError } = require('../util/error/app-error');
const { StatusCodes } = require('http-status-codes');
const {compareTime}=require('../util/helpers/datetime-helper');
const {Op}=require('sequelize')
const flightRepositary = new FlightsRepositry();
const endingTime=" 23:59:00";
async function createFlight(data) { 
      if(!compareTime(data.arrivalTime,data.departureTime)){
        throw new AppError('ArrivalTime is grater than departureTime so Enter correct Time',StatusCodes.BAD_REQUEST);
      }
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
        console.log('airport service  error---------------------'+error);
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

async function getAllFlights(query){
    let customFilter={};
    let sortFilter;
    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split('-');
       customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split('-');
        customFilter.price={
            [Op.between]:[minPrice,(maxPrice==undefined)?200000:maxPrice],
        }

    }
    if(query.tripDate){
        console.log(query.tripDate);
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endingTime],
        }
    }
    if(query.traveller){
        customFilter.totalSeats={
            [Op.gte]:[query.traveller],
        }
    }
    if(query.sort){
        const params=query.sort.split(',');
        const sortfilers=params.map((param)=>param.split('_'));
        sortFilter=sortfilers;
    }

    console.log(customFilter);
    console.log(sortFilter);
    try{
        const flight =await flightRepositary.getAllFlights(customFilter,sortFilter);
        return flight;

    }catch(error)
    {
        console.log(error);
        throw new AppError('Cannot fetch data of All the flights',StatusCodes.NOT_FOUND)
    }
   

}
module.exports = {createFlight,getFlights,getFlight,destroyFlight,updateFlight,getAllFlights};