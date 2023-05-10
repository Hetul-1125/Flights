
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const { SuccessResponse, ErrorReaponse } = require('../util/common');
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
module.exports={createAirplane,getAirplanes}