const mongoose = require("mongoose");

const DrinksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "Drinks" }
);

const Drinks = mongoose.model("Drinks", DrinksSchema);
module.exports = Drinks;
