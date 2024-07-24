const { FlightRepository } = require('../repository/index')

const flightRepository = new FlightRepository();

const create = async(req, res) => {
   try {
       const flight = await flightRepository.createFlight(req.body);
       return res.status(201).json({
           data: flight,
           success: true,
           err: {},
           message:"Successfully created a City",
       })
   } catch (error) {
     console.log(error);
       return res.status(500).json({
           data: {},
           success: false,
           message: "Not able to Create a flight",
           err: {},
       })
   }
}

module.exports = {
    create
}
