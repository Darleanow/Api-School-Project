var express = require("express");
var router = express.Router();

router.get("/", function (request, response, next) {
  response.send("get drinks list");
});

router.get("/:id", function (request, response, next) {
  response.send("get drink " + request.params.id);
});

router.post("/", function (request, response, next) {
  const drink = request.body;
  response.send(drink.name + " add drink");
});

router.put("/:id", function (request, response, next) {
  const drink = request.body;
  response.send(drink.name + " update drink " + request.params.id);
});

router.delete("/:id", function (request, response, next) {
  response.send("delete drink " + request.params.id);
});

module.exports = router;
