const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await this.cityRepository.deleteCity(cityId);
      return result;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      console.log("inside a service");
      return city;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({name : filter.name});
      return cities;
    } catch (error) {
      console.error("Something went wrong in the service layer:", error);
      throw error;
    }
  }
}

module.exports = CityService;
