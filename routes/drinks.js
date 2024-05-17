var express = require("express");
var router = express.Router();
const Drinks = require("../models/Drinks");

router.get("/", async function (request, response, next) {
  try {
    const drinks = await Drinks.find({});
    if (drinks.length === 0) {
      response.status(404).send({ message: "Drinks not found" });
    } else {
      response.send(drinks);
    }
  } catch (error) {
    response.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:id", async function (request, response, next) {
  try {
    const drink = await Drinks.findById(request.params.id);
    if (!drink) {
      response.status(404).send({ message: "Drink not found" });
    } else {
      response.send(drink);
    }
  } catch (error) {
    response.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/", function (request, response, next) {
  const newDrink = new Drinks(request.body);

  newDrink.save((error, savedDrink) => {
    if (error) {
      response.status(500).send({ message: "Failed to save drink" });
    } else {
      response.status(201).send(savedDrink);
    }
  });
});

router.put("/:id", async function (request, response, next) {
  await Drinks.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true },
    (error, updatedDrink) => {
      if (error) {
        response.status(500).send({ message: "Failed to update drink" });
      } else if (!updatedDrink) {
        response.status(404).send({ message: "Drink not found" });
      } else {
        response.send(updatedDrink);
      }
    }
  );
});

router.delete("/:id", function (request, response, next) {
  Drinks.findByIdAndDelete(request.params.id, (error, deletedDrink) => {
    if (error) {
      response.status(500).send({ message: "Failed to delete drink" });
    } else if (!deletedDrink) {
      response.status(404).send({ message: "Drink not found" });
    } else {
      response.send(deletedDrink);
    }
  });
});

module.exports = router;
