const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { Character } = require("../database/index");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", (req, res) => {
  login(req, res);
});

router.get("/all", async (req, res) => {
  try {
    const allCharacters = await getApiData();

    await Character.bulkCreate(allCharacters);
    return res.json(allCharacters);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/alldb", async (req, res) => {
  try {
    const info = await Character.findAll();
    return res.json(info);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav", (req, res) => {
  deleteFav(req, res);
});

module.exports = {
  router,
};
