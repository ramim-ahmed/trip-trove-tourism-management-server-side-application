const express = require("express");
const { countryRoutes } = require("../modules/country/country.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/countries",
    route: countryRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
