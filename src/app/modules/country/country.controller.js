const httpStatus = require("http-status");
const { countryService } = require("./country.service");

const createNewCountry = async (req, res) => {
  try {
    const data = req.body;
    const result = await countryService.createNewCountry(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "create new country successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "create new country failed!!",
      error,
    });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const result = await countryService.getAllCountries();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Countries successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch All Countries failed!!",
      error,
    });
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await countryService.updateCountry(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Country is updated successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Country is udpated failed!!",
      error,
    });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await countryService.deleteCountry(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Country is deleted successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Country is deleted failed!!",
      error,
    });
  }
};

module.exports.countryController = {
  createNewCountry,
  getAllCountries,
  updateCountry,
  deleteCountry,
};
