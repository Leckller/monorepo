const express = require("express");
const cors = require("cors");
const { task } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const allTask = await task.findAll({ attributes: { exclude: ["id"] } });
  res.status(200).json(allTask);
});

app.post("/", async (req, res) => {
  const allTask = await task.create({ taskName: "concurso caixa" });
  res.status(200).json(allTask);
});

module.exports = app;