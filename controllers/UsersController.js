const express = require("express");
const router = express.Router();
const userRespository = require("../repositories/UserRepository");
const authentication = require("../middlewares/authentication");

router.get("/", async (req, res, next) => {
  try {
    const user = await userRespository.getUsers();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await userRespository.getUser(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

router.post("/", [authentication], async (req, res, next) => {
  try {
    const user = await userRespository.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

router.put("/:id", [authentication], async (req, res, next) => {
  try {
    const user = await userRespository.updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

router.delete("/:id", [authentication], async (req, res, next) => {
  try {
    const user = await userRespository.deleteUser(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
});

module.exports = router;
