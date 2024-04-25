const Tourist = require("./tourist.model");

const createNewTourist = async (data) => {
  const result = await Tourist.create(data);
  return result;
};

const getAllTourists = async (average_cost) => {
  const result = await Tourist.find()
    .sort({ average_cost })
    .populate("country");
  return result;
};

module.exports.touristService = {
  createNewTourist,
  getAllTourists,
};
