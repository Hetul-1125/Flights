// const express=require('express');
// const {AirplaneController}=require('../../controllers');
// const router=express.Router();  
// router.post('/',AirplaneController);
// module.exports=router;
const {AirplaneMiddleware}=require('../../middlewares');
const express=require('express');
const router=express.Router();
const {AirplaneController}=require('../../controllers');
router.post('/',AirplaneMiddleware.vailidateCreateRequest,AirplaneController.createAirplane)
router.get('/',AirplaneController.getAirplanes);
module.exports=router