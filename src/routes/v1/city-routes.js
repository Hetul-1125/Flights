const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const {CityMiddleware}=require('../../middlewares')

// api/v1/city POST
router.post('/',
            CityMiddleware.vailidateCreateRequest,
            CityController.createCity);

// api/v1/city/:id POST
router.delete('/:id',
            CityController.distroyCity);

// api/v1/city/:id POST
router.patch('/:id',
            CityController.updateCity);

// api/v1/city/:id POST
router.get('/',
            CityController.getCities);




module.exports=router;