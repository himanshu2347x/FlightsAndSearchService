const { CityService } = require("../services/index");
const { Op } = require("sequelize");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const result = await cityService.createCity(req.body);
    return res.status(201).json({
      data: result,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Create a City",
      err: {},
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const result = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: result,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a City",
      err: {},
    });
  }
};

const destroy = async (req, res) => {
  try {
    const result = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: result,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a City",
      err: {},
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fethed all the cities",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the cities",
      err: {},
    });
  }
}
module.exports = {
    create,
    destroy,
    get,
  update,
    getAll
}
