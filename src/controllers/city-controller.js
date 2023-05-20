const {CityService}=require('../services');
const{SuccessResponse,ErrorReaponse}=require('../util/common')
const {StatusCodes}=require('http-status-codes')

/**
 * post:/city
 * req-body{
 * name:'valsad'
 * }
 */

async function createCity(req,res){
    try{
        const city=await CityService.createCity({
            name:req.body.name
        })
        SuccessResponse.message='Successfully create a city';
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    }catch(error){
        console.log("error message ",error);
        ErrorReaponse.message='Somethig went wrong while create'
        ErrorReaponse.error=error;
        // console.log('error ',error);
        return res.status(error.statusCode).json(ErrorReaponse);
    }

}

/**
 * post:/city/:id
 * req-body{'
 * }
 */

async function distroyCity(req,res){
    try{
        const city=await CityService.distroyCity(req.params.id);
        SuccessResponse.message='Successfully distroy a city';
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    }catch(error){
        ErrorReaponse.message='Somethig went wrong while distroy'
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }

}

/**
 * post:/city/:id
 * req-body{
 * name:'new name'
 * }
 */

async function updateCity(req,res){
    try{
        const city=await CityService.updateCity(req.params.id,{name:req.body.name});
        SuccessResponse.message='Successfully update a city';
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    }catch(error){
        ErrorReaponse.message='Somethig went wrong while update city'
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }

}
/**
 * 
  get:/city/
 */
async function getCities(req,res){
    try{
        const city=await CityService.getCities();
        SuccessResponse.message='Successfully get a cities';
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    }catch(error){
        ErrorReaponse.message='Somethig went wrong while get city'
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }

}

async function getCity(req,res){
    try{
        const city=await CityService.getcity(req.params.id);
        SuccessResponse.message='Successfully get a city';
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    }catch(error){
        ErrorReaponse.message='Somethig went wrong while get city'
        ErrorReaponse.error=error;
        return res.status(error.statusCode).json(ErrorReaponse);
    }

}
module.exports={createCity,distroyCity,updateCity,getCities,getCity}