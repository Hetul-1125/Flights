const{Flight}=require('../models')
const CrudRepositry=require('./crud-repositary');
class FlightsRepositary extends CrudRepositry{
    constructor(){
        super(Flight);
    }
    async getAllFlights(filter,sortFilter)
    {
        const response=await Flight.findAll({
            where:filter,
            order:sortFilter,
        });
        return response;
    }
     
    
}
module.exports=FlightsRepositary;