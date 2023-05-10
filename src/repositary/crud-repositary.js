const { Logger } = require('../config');
const { AppError } = require('../util/error/app-error');
const {StatusCodes}=require('http-status-codes');
class CrudRepositry {
    constructor(model) {
        console.log("constructer", model);
        this.model = model;
    }

    async create(data) {

        const response = await this.model.create(data);

        return response;
    }
    async destroy(data) {

        const response = await this.model.destroy({
              where:{
                id:data,
              }
        });
        if(!response)
        {
            throw new AppError('Note able to find resourse',StatusCodes.NOT_FOUND);
        }

        return response;
    }
    async get(data) {

        const response = await this.model.findByPk(data);
         if(!response)
         {
            throw new AppError('Note able to find resourse',StatusCodes.NOT_FOUND)
         }
        return response;
    }
    async getAll() {

        const response = await this.model.findAll();

        return response;
    }
    async update(id,data){
        const response=await this.model.update(data,{
            where:{
                id:id,
            }
        });
        return response;
    }
}
module.exports = CrudRepositry;