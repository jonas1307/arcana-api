const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
  },
  arcana_type: {
    type: Number,
    enum: [1, 2],
    required: true,
  },
  arcana_suit: {
    type: Number,
    enum: [1, 2, 3, 4],
  },
  file_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  deleted_at: Date,
});

function validateCard(card) {
  const model = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    arcana_type: Joi.number().required().valid([1, 2]),
    arcana_suit: Joi.number().required().valid([null, 1, 2, 3, 4]),
    file_name: Joi.string().required(),
    description: Joi.string().required(),
  });
  return model.validate(card);
}

module.exports.Card = mongoose.model("cards", schema);
module.exports.validateCard = validateCard;
