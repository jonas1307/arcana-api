const home = require("../controllers/HomeController");
const users = require("../controllers/UsersController");
const auth = require("../controllers/AuthController");
const cards = require("../controllers/CardsController");

module.exports = function (app) {
  app.use("/", home);
  app.use("/users", users);
  app.use("/auth", auth);
  app.use("/cards", cards);
};
