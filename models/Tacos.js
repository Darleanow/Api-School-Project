const mongoose = require("mongoose");

const TacosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: mongoose.Schema.Types.ObjectId, // Array
      ref: "Ingredients",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    spicy: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "Tacos" }
);

const Tacos = mongoose.model("Tacos", TacosSchema);
modules.export = Tacos;
