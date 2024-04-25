const express = require("express");
const { countryRoutes } = require("../modules/country/country.route");
const { touristRoutes } = require("../modules/tourist/tourist.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/countries",
    route: countryRoutes,
  },
  {
    path: "/tourists",
    route: touristRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
