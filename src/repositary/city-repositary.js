const {city}=require('../models');
const CrudRepositry=require('./crud-repositary')
class CityRepositry extends CrudRepositry{
    constructor(){
        super(city);
    }
}
module.exports=CityRepositry;