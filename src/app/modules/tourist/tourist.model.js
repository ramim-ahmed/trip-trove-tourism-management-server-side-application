const { Schema, model } = require("mongoose");

const touristSchema = new Schema({
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requied: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  average_cost: {
    type: String,
    required: true,
  },
  seasonality: {
    type: String,
    required: true,
  },
  travel_time: {
    type: String,
    required: true,
  },
  total_visitor_per_year: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Tourist = model("Tourist", touristSchema);

module.exports = Tourist;
