const express = require("express");
const router = express.Router();
const cardRepository = require("../repositories/CardRepository");

router.get("/", async (req, res, next) => {
  const cards = await cardRepository.getCards();
  res.status(200).send(cards);
});

router.get("/:id", async (req, res, next) => {
  try {
    const card = await cardRepository.getCard(req.params.id);
    res.status(200).send(card);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

module.exports = router;
