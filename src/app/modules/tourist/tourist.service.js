const Tourist = require("./tourist.model");

const createNewTourist = async (data) => {
  const result = await Tourist.create(data);
  return result;
};

const getAllTourists = async () => {
  const result = await Tourist.find().populate("country");
  return result;
};

module.exports.touristService = {
  createNewTourist,
  getAllTourists,
};
