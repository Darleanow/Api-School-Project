const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema(
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
  { collection: "Ingredients" }
);

const Ingredients = mongoose.model("Ingredients", IngredientsSchema);
modules.export = Ingredients;
