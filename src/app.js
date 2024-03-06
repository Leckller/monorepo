const express = require("express");
const cors = require("cors");
const { task, user, task_user } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/task/:id", async (_req, res) => {
  const { id } = _req.params;
  const allTask = await task.findAll({ where: { id }, attributes: { exclude: ["id"] } });
  res.status(200).json(allTask);
});

app.post("/task/:id", async (_req, res) => {
  const { id } = _req.params;
  const { taskName } = _req.body;
  const allTask = await task.create({ taskName });
  await task_user.create({ task_id: allTask.id, user_id: id });
  res.status(200).json(allTask);
});

app.get("/user", async (_req, res) => {
  const actUser = await user.findAll({ attributes: { exclude: ["id"] } });
  res.status(200).json(actUser);
});

app.post("/user", async (_req, res) => {
  const { userName } = _req.body;
  const actUser = await user.create({ userName });
  res.status(200).json(actUser);
});

app.get("/:id", async (_req, res) => {
  const { id } = _req.params;
  const userTasks = await user.findOne({
    where: { id },
    include: [{ model: task, as: "tasks" }]
  });
  res.status(200).json(userTasks);
});


module.exports = app;