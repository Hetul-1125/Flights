const{Flight}=require('../models')
const CrudRepositry=require('./crud-repositary');
class FlightsRepositary extends CrudRepositry{
    constructor(){
        super(Flight);
    }
    
}
module.exports=FlightsRepositary;