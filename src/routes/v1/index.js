const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/city-controller");

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);

module.exports = router;
