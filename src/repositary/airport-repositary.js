const {Airport} = require('../models');
const CrudRepositry=require('./crud-repositary');
class AirportRepositry extends CrudRepositry{
    constructor(){
        super(Airport);
    }
}
module.exports=AirportRepositry;