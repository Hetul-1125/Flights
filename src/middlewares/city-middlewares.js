const {StatusCodes}=require('http-status-codes');
const {ErrorReaponse}=require('../util/common')
function vailidateCreateRequest(req,res,next){
    if(!req.body.name)
    {
        ErrorReaponse.message='Someting went wrong while creating city',
        ErrorReaponse.error={
            explanation:'City name not found in the oncoming request in correct form',
        }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorReaponse )
    }
    next();
}
module.exports={vailidateCreateRequest};