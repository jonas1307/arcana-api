const { Card } = require("../models/Card");

async function getCards() {
  return await Card.where({ deleted_at: null });
}

async function getCard(id) {
  const card = await Card.findOne({ _id: id, deleted_at: null });
  if (!card) throw new Error("card not found.");
  return card;
}

module.exports.getCards = getCards;
module.exports.getCard = getCard;
