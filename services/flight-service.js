const { FlightRepository, AirplaneRepository } = require('../repository/index');
const {compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository;
        this.flightRepository = new this.flightRepository;
    }
    
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { erroe: "Arrival time cannot be less than Departure time " };
            }
           const airplane = this.airplaneRepository.getAirplane(
             data.airplaneId
           );
            const flight = this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            })
            return flight;  
       } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
       }

    }
}

module.exports = FlightService;