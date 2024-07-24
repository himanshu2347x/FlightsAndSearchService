const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = airportRepository;
  }
    
    
  async createAirport(data) {
    try {
      const airport = await this.airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async updateAirport(data, airportId) {
    try {
      const airport = await this.airportRepository.updateAirport(
        data,
        airportId
      );
      return airport;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      const airport = await this.airportRepository.deleteAirport(airportId);
      return airport;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }
}
module.exports = AiportService;
