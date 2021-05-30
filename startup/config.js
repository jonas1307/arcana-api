const express = require("express");
const cors = require("cors");
const env = require("dotenv");

module.exports = function (app) {
  env.config();
  app.use(express.json());
  app.use(cors());

  if (!process.env.MONGODB_CONNECTION) {
    throw new Error("MONGODB_CONNECTION is not set.");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set.");
  }

  if (!process.env.JWT_ISSUER) {
    throw new Error("JWT_ISSUER is not set.");
  }
};
