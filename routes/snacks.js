var express = require("express");
var router = express.Router();

router.get("/", function (request, response, next) {
  response.send("get snacks list");
});

router.get("/:id", function (request, response, next) {
  response.send("get snack " + request.params.id);
});

router.post("/", function (request, response, next) {
  const snack = request.body;
  response.send(snack.name + " add snack");
});

router.put("/:id", function (request, response, next) {
  const snack = request.body;
  response.send(snack.name + " update snack " + request.params.id);
});

router.delete("/:id", function (request, response, next) {
  response.send("delete snack " + request.params.id);
});

module.exports = router;
