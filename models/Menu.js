const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tacos: {
      type: mongoose.Schema.Types.ObjectId, // Array
      ref: "Tacos",
      required: true,
    },
    drink: {
      type: mongoose.Schema.Types.ObjectId, // Array
      ref: "Drinks",
      required: true,
    },
    snack: {
      type: mongoose.Schema.Types.ObjectId, // Array
      ref: "Snacks",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "Menu" }
);

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
