const express = require("express");
const { touristController } = require("./tourist.controller");
const router = express.Router();

router.get("/", touristController.getAllTourists);
router.get("/:id", touristController.getSingleTourist);
router.post("/create-new", touristController.createNewTourist);
router.delete("/:id", touristController.deleteTourist);

module.exports.touristRoutes = router;
