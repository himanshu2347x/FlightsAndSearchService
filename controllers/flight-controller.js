const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a Flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: {},
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlightData(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      err: {},
      message: "Successfully fetched all the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the flights",
      err: {},
    });
  }
};

module.exports = {
  create,
  getAll,
};
