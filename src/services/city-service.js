
const{CityRepositry}=require('../repositary');
const {AppError}=require('../util/error/app-error')
const{StatusCodes}=require('http-status-codes')
const cityRepositry=new CityRepositry();
async function  createCity(data){
    try{
       const city=await cityRepositry.create(data);
       return city;
    }catch(error)
    {
        console.log("error name  ",error.name);
        if (error.name == "TypeError") {
            throw new AppError('Can not create a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        else if (error.name == 'SequelizeValidationError') {
            let expanation = [];
            error.errors.forEach(err => {
                console.log("message ",err.message);
                expanation.push(err.message);
            });
            console.log("expantion ",expanation);
            throw new AppError(expanation, StatusCodes.BAD_REQUEST);
        }else if(error.name=='SequelizeUniqueConstraintError')
        {
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            console.log("expantion ",expanation);
            throw new AppError(expanation,StatusCodes.BAD_REQUEST);

        }
        throw error;

    }

}

async function distroyCity(id){
    try{
          const city=cityRepositry.destroy(id);
          return city;
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('The airplane request is not present', error.statusCode);
        }
    }
}

async function updateCity(id,data){
    try{
          const city=cityRepositry.update(id,data);
          return city;
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('The airplane request is not present', error.statusCode);
        }else if(error.name=='SequelizeUniqueConstraintError'){
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            console.log("expantion ",expanation);
            throw new AppError(expanation,StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

async function getCities(){
    try{
          const city=cityRepositry.getAll();
          return city;
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('The airplane request is not present', error.statusCode);
        }else if(error.name=='SequelizeUniqueConstraintError'){
            let expanation = [];
            error.errors.forEach(err => {
                expanation.push(err.message);
            });
            console.log("expantion ",expanation);
            throw new AppError(expanation,StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}
module.exports={createCity,distroyCity,updateCity,getCities}