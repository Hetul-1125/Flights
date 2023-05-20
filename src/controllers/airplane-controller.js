
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
    console.log('create plane call')
    console.log(req.body.modelNumber);
    console.log(req.body.capacity);
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
    
   try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
} catch(error) {
    ErrorReaponse.message='Something went wrong while get airplane';
    ErrorReaponse.error=error;
    console.log("Error response");
    console.log(ErrorReaponse);
    return res
            .status(error.statusCode)
            .json(ErrorReaponse);
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

/**
 * post:/airplanes/:id
 * req-body{}
 */

async function distroyAirplane(req,res){
    
    try{
        const airplane= await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.message='successfully distroy airplane';
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorReaponse.message='Something went wrong while distroy airplane';
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

/**
 * post:/airplanes/:id
 * req-body{
 * capacity:200
 * }
 */

async function updateAirplane(req,res){
    
    try{
        const airplane= await AirplaneService.updateAirplane(req.params.id,{capacity:req.body.capacity});
        SuccessResponse.message='successfully update airplane';
        SuccessResponse.data=await AirplaneService.getAirplane(req.params.id);
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorReaponse.message='Something went wrong while update airplane';
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }
}

module.exports={createAirplane,getAirplanes,getAirplane,distroyAirplane,updateAirplane}