const httpStatus = require("http-status");
const { touristService } = require("./tourist.service");

const createNewTourist = async (req, res) => {
  try {
    const data = req.body;
    const result = await touristService.createNewTourist(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "create new tourist spot successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "create new tourist spot failed!!",
      error,
    });
  }
};

const getAllTourists = async (req, res) => {
  try {
    const { country, average_cost } = req.query;
    const result = await touristService.getAllTourists(
      country,
      average_cost || "asc"
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: "Tourists spot fetch all successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Tourists spot fetch all failed!!",
      error,
    });
  }
};

const getSingleTourist = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await touristService.getSingleTourist(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Tourist spot is fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Tourist Spot is fetch failed!!",
      error,
    });
  }
};

const deleteTourist = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await touristService.deleteTourist(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Tourist Spot deleted successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Tourist Spot is deleted failed!!",
      error,
    });
  }
};
module.exports.touristController = {
  createNewTourist,
  getAllTourists,
  deleteTourist,
  getSingleTourist,
};
