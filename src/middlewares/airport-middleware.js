const {StatusCodes}=require('http-status-codes');
const {ErrorReaponse}=require('../util/common')
function vailidateCreateRequest(req,res,next){
    if(!req.body.modelNumber)
    {
        ErrorReaponse.message='Someting went wrong while creating airplane',
        ErrorReaponse.error={
            explanation:'Model number not found in the oncoming request in correct form',
        }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorReaponse )
    }
    next();
}
module.exports={vailidateCreateRequest};