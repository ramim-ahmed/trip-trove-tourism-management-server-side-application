const Country = require("./country.model");

const createNewCountry = async (data) => {
  const result = await Country.create(data);
  return result;
};

const getAllCountries = async () => {
  const result = await Country.find();
  return result;
};

module.exports.countryService = {
  createNewCountry,
  getAllCountries,
};
