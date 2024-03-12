const express = require("express");
const router = express.Router();
const midds = require("../middlewares");
const { task, task_user, user } = require("../models");

router.post("/", async (req, res) => {
  const { taskName, deadline } = req.body;

  if (!taskName) return res.status(400).json("insira um nome para a tarefa");

  const data = new Date();
  data.setDate(data.getDate() + 1);

  const addTask = await task.create({ taskName, deadline: deadline ? deadline : data });
  await task_user.create({ taskId: addTask.id, userId: req.userId });

  res.status(200).json(addTask);
});

router.get("/", async (req, res) => {
  const { userId } = req;
  const tasks = await user.findAll({
    where: { id: userId },
    include: [{ model: task, as: "tasks", through: { attributes: [] } }]
  });
  res.status(200).json(tasks);
});

router.patch("/:id", midds.tasks.taskExistsById, async (req, res) => {
  const { taskName } = req.body;
  const { id } = req.params;

  await task.update({ taskName }, { where: { id } });
  res.status(200).json({ message: "Task atualizada" });
});

router.delete("/:id", midds.tasks.taskExistsById, async (req, res) => {
  const { id } = req.params;

  await task.destroy({ where: { id } });

  res.status(200).json({ message: "Task deletada" });
});

module.exports = router;