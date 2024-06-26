const { City } = require("../models/index");
const { Op, where } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something Went Wrong in the repository layer");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      // below approach also works but return in form of array having detail how many row are affected
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //     }
      //     });

      //this approach return the updated city
      const ciy = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something Went Wrong in the repository layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.error("Error in deleteCity method:", error);
      throw error;
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.error("Error in fetching cities:", error);
      throw error;
    }
  }
}
module.exports = CityRepository;
