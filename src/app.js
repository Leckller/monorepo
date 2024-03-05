const express = require("express");
const cors = require("cors");
const { Tasks } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const allTasks = await Tasks.findAll();
  res.status(200).json(allTasks);
});

module.exports = app;