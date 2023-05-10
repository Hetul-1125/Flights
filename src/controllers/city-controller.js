const {CityService}=require('../services');
const{SuccessResponse,ErrorReaponse}=require('../util/common')
const {StatusCodes}=require('http-status-codes')
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
module.exports={createCity}