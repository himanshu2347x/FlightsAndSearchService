const city = require("../models/city");
const city = require("../models/city");
const { CityRepository } = require("../repository/index");

class cityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity() {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
      try {
          const result = await this.cityRepository.deleteCity(cityId);
          return result;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async updateCity(cityId,data) {
      try {
          const city = await this.cityRepository.updateCity(cityId, data);
          return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async getCity(cityId) {
      try {
          const city = await this.cityRepository.getCity(cityId);
          return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
}
module.exports = cityService;
