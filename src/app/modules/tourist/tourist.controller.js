const httpStatus = require("http-status");
const { touristService } = require("./tourist.service");

const createNewTourist = async (req, res) => {
  try {
    const data = req.body;
    const result = await touristService.createNewTourist(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "create new tourist successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "create new tourist failed!!",
      error,
    });
  }
};

const getAllTourists = async (req, res) => {
  try {
    const result = await touristService.getAllTourists();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Tourists fetch all successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Tourists fetch all failed!!",
      error,
    });
  }
};
module.exports.touristController = {
  createNewTourist,
  getAllTourists,
};
