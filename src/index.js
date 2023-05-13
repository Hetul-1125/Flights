const express = require('express');
const apiRoutes = require('./routes');
const { ServerConfig } = require('./config');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, async () => {
    console.log("successfully started the server on port ", ServerConfig.PORT);
    // // Logger.info("Successfully started the server ",{})
    // Logger.info("Successfully started the server ",{msg:"somting"})

    //bad code

    //  const {city,Airport}=require('./models')
    //  const cities=await city.findAll();
    //  const h=await Airport.findByPk(1);

    // const cities=await city.findByPk(3)
    // const airport=await Airport.create({name:'surat',code:'SUT',cityId:3})
    // console.log(airport);
    //  const a=await cities.getAirports();
    //  console.log(a);
    //  await cities.removeAirports(h);
    //    const all=await Airport.findAll();
    //     console.log(all)
    //  console.log(cities);
    // await city.destroy({where:{
    //     id:3
    // }});
    // console.log(cities);
}) 