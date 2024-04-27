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
    return result;
  }
  result = await Tourist.find().populate("country").sort({ average_cost });
  return result;
};

const getMyTouristLists = async (email) => {
  const result = await Tourist.find({ "user.email": email })
    .populate("country")
    .sort({
      createdAt: "desc",
    });
  return result;
};

const getSingleTourist = async (id) => {
  const result = await Tourist.findOne({ _id: id }).populate("country");
  return result;
};

const updateTourist = async (id, data) => {
  const result = await Tourist.updateOne({ _id: id }, data);
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
  updateTourist,
  getMyTouristLists,
};
