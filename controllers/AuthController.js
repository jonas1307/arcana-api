const express = require("express");
const router = express.Router();
const authRepository = require("../repositories/AuthRepository");

router.post("/", async (req, res, next) => {
  const { error } = authRepository.validatePayload(req.body);
  if (error) return res.status(400).send("invalid payload.");
  try {
    const token = await authRepository.authUser(req.body);
    res.status(200);
    res.send(token);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

module.exports = router;
