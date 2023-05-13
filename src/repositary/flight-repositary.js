const{Flights}=require('../models')
const CrudRepositry=require('./crud-repositary');
class FlightsRepositary extends CrudRepositry{
    constructor(){
        super(Flights);
    }
}
module.exports=FlightsRepositary;