const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const customFormate=printf(({level,message,timestamp})=>{
    return `${timestamp} :${level}: ${message}`;
})
const logger=createLogger({
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customFormate
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'combined.log'})
    ]
})
module.exports=logger