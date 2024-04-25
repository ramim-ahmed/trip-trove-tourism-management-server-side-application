const Tourist = require("./tourist.model");

const createNewTourist = async (data) => {
  const result = await Tourist.create(data);
  return result;
};

const getAllTourists = async (country, average_cost) => {
  let result;
  if (country) {
    result = await Tourist.find({ country: country })
      .sort({ average_cost })
      .populate("country");
  }
  result = await Tourist.find().sort({ average_cost }).populate("country");
  return result;
};

const getSingleTourist = async (id) => {
  const result = await Tourist.findOne({ _id: id });
  return result;
};
const deleteTourist = async (id) => {
  const result = await Tourist.deleteOne({ _id: id });
  return result;
};

module.exports.touristService = {
  createNewTourist,
  getAllTourists,
  deleteTourist,
  getSingleTourist,
};
