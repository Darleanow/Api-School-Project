var express = require("express");
var router = express.Router();

router.get("/", function (request, response, next) {
  response.send("get menus list");
});

router.get("/:id", function (request, response, next) {
  response.send("get menu " + request.params.id);
});

router.post("/", function (request, response, next) {
  const menu = request.body;
  response.send(menu.name + " add menu");
});

router.put("/:id", function (request, response, next) {
  const menu = request.body;
  response.send(menu.name + " update menu " + request.params.id);
});

router.delete("/:id", function (request, response, next) {
  response.send("delete menu " + request.params.id);
});

module.exports = router;
