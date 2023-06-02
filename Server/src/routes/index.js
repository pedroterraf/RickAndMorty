const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", (req, res) => {
  login(req, res);
});

router.delete("/fav", (req, res) => {
  deleteFav(req, res);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

module.exports = {
  router,
};
