const mongoose = require("mongoose");

const SnacksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "Snacks" }
);

const Snacks = mongoose.model("Snacks", SnacksSchema);
module.exports = Snacks;
