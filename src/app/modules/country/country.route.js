const express = require("express");
const { countryController } = require("./country.controller");
const router = express.Router();

router.get("/", countryController.getAllCountries);
router.post("/create-new", countryController.createNewCountry);

module.exports.countryRoutes = router;
