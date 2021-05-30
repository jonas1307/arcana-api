const { User } = require("../models/User");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function validatePayload(payload) {
  var model = Joi.object({
    auth_type: Joi.string()
      .valid(...["password", "refresh-token"])
      .required(),
    credentials: Joi.string().required(),
  });
  return model.validate(payload);
}

function generateBearer(user) {
  const payload = {
    id: user._id,
    sub: user.email,
    iss: process.env.JWT_ISSUER,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40m" });
}

async function authUser(payload) {
  const username = decodeURI(payload.credentials.split("|")[0]);
  const password = decodeURI(payload.credentials.split("|")[1]);
  const query = { email: username, deleted_at: null, is_enabled: true };
  const user = await User.findOne(query);
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      return generateBearer(user);
    }
  }
  throw new Error("invalid username or password.");
}

module.exports.authUser = authUser;
module.exports.validatePayload = validatePayload;
