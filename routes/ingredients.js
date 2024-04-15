var express = require("express");
var router = express.Router();

router.get("/", function (request, response, next) {
  response.send("get ingredients list");
});

router.get("/:id", function (request, response, next) {
  response.send("get ingredient " + request.params.id);
});

router.post("/", function (request, response, next) {
  const ingredient = request.body;
  response.send(ingredient.name + " add ingredient");
});

router.put("/:id", function (request, response, next) {
  const ingredient = request.body;
  response.send(ingredient.name + " update ingredient " + request.params.id);
});

router.delete("/:id", function (request, response, next) {
  response.send("delete ingredient " + request.params.id);
});

module.exports = router;
