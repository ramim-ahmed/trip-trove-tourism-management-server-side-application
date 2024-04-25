const express = require("express");
const { countryController } = require("./country.controller");
const router = express.Router();

router.get("/", countryController.getAllCountries);
router.post("/create-new", countryController.createNewCountry);
router.patch("/:id", countryController.updateCountry);
router.delete("/:id", countryController.deleteCountry);
module.exports.countryRoutes = router;
