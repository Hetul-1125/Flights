// const express=require('express');
// const {AirplaneController}=require('../../controllers');
// const router=express.Router();  
// router.post('/',AirplaneController);
// module.exports=router;
const { AirplaneMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();
const { AirplaneController } = require('../../controllers');
// api/v1/airplanes POST
router.post('/',
        AirplaneMiddleware.vailidateCreateRequest, 
        AirplaneController.createAirplane);

// api/v1/airplanes GET
router.get('/', 
        AirplaneController.getAirplanes);

// api/v1/airplanes/:id POST
router.post('/:id', 
        AirplaneController.getAirplane);

module.exports = router