
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const { SuccessResponse, ErrorReaponse } = require('../util/common');
/**
 * post:/airplanes
 * req-body{
 *  modelNumber:a3200,
            capacity:150,
        }
 */
async function createAirplane(req,res){
    
    try{
        const airplane= await AirplaneService.createAirplane({
            
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        })
        SuccessResponse.message='successfully create an airplane';
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorReaponse.message='Something went wrong while create airplane';
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * get:/airplanes
 * req-body{}
 */
async function getAirplanes(req,res){
    
    try{
        const airplane= await AirplaneService.getAirplanes();
        SuccessResponse.message='successfully get airplanes';
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorReaponse.message='Something went wrong while get airplanes';
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * post:/airplanes/:id
 * req-body{}
 */

async function getAirplane(req,res){
    
    try{
        const airplane= await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.message='successfully get airplane';
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorReaponse.message='Something went wrong while get airplane';
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}
module.exports={createAirplane,getAirplanes,getAirplane}