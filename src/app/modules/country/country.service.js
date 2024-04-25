const Country = require("./country.model");

const createNewCountry = async (data) => {
  const result = await Country.create(data);
  return result;
};

const getAllCountries = async () => {
  const result = await Country.find();
  return result;
};

const updateCountry = async (id, data) => {
  const result = await Country.updateOne({ _id: id }, data);
  return result;
};

const deleteCountry = async (id) => {
  const result = await Country.deleteOne({ _id: id });
  return result;
};

module.exports.countryService = {
  createNewCountry,
  getAllCountries,
  updateCountry,
  deleteCountry,
};
