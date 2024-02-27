const express = require("express");
const services = require("../services");
const route = express.Router();

route.get("/", async (req, res) => {

});

route.post("/", async (req, res) => {
  const { name, limitData, importante, urgente } = req.body;

  const response = await services.tasks.insertTask(name, limitData, importante, urgente);

  res.status(200).json({ id: response.data });
});

module.exports = route;