const {Airplane} = require('../models');
const CrudRepositry=require('./crud-repositary');
class AirplaneRepositry extends CrudRepositry{
    constructor(){
        super(Airplane);
    }
}
module.exports=AirplaneRepositry;