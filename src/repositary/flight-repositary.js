const { Flight, Airplane, Airport, city } = require('../models')
const { Sequelize } = require('sequelize')
const CrudRepositry = require('./crud-repositary');
class FlightsRepositary extends CrudRepositry {
    constructor() {
        super(Flight);
    }
    async getAllFlights(filter, sortFilter) {
        const response = await Flight.findAll({
            where: filter,
            order: sortFilter,
            include: [
                {

                    model: Airplane,
                    as: 'ariplane_details',
                    required: true
                },
                {
                    model: Airport,
                    as: 'departure_airport',
                    on: {
                        col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), '=', Sequelize.col('departure_airport.code')),


                    },
                    include: {
                        model: city,
                        required: true,
                    }
                },
                {

                    model: Airport,
                    as: 'arrival_airport',
                    on: {
                        col2: Sequelize.where(Sequelize.col('Flight.arrivalAirportId'), '=', Sequelize.col('arrival_airport.code')),

                    },
                    include: {
                        model: city,
                        required: true,
                    }
                }
            ]
        });
        return response;
    }


}
module.exports = FlightsRepositary;