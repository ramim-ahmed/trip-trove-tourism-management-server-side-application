const express = require("express");
const { touristController } = require("./tourist.controller");
const router = express.Router();

router.get("/", touristController.getAllTourists);
router.post("/create-new", touristController.createNewTourist);

module.exports.touristRoutes = router;
