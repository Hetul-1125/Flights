const express =require('express');
const apiRoutes=require('./routes');
const { ServerConfig}=require('./config');

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes)
app.listen(ServerConfig.PORT,()=>{
    console.log("successfully started the server on port ",ServerConfig.PORT);
    // // Logger.info("Successfully started the server ",{})
    // Logger.info("Successfully started the server ",{msg:"somting"})
}) 