const Country = require("./country.model");

const createNewCountry = async (data) => {
  const result = await Country.create(data);
  return result;
};

module.exports.countryService = {
  createNewCountry,
};
