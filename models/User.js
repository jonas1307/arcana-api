const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    maxlength: 72,
  },
  is_enabled: {
    type: Boolean,
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

function validateCreate(user) {
  const model = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    email: Joi.string()
      .min(6)
      .max(255)
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });
  return model.validate(user);
}

function validateUpdate(user) {
  const model = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    email: Joi.string()
      .min(6)
      .max(255)
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return model.validate(user);
}

module.exports.User = mongoose.model("users", schema);
module.exports.validateUserCreate = validateCreate;
module.exports.validateUserUpdate = validateUpdate;
