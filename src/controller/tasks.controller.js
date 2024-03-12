const express = require("express");
const router = express.Router();
const midds = require("../middlewares");
const { task, task_user } = require("../models");

router.post("/", midds.validToken, async (req, res) => {
  const { taskName, deadline } = req.body;
  console.log(req.userId);
  if (!taskName) return res.status(400).json("insira um nome para a tarefa");
  if (!deadline) {
    const data = new Date();
    data.setDate(data.getDate() + 1);
    const addTask = await task.create({ taskName, deadline: data });
    await task_user.create({ taskId: addTask.id, userId: req.userId });
    return res.status(200).json(addTask);
  }

  const addTask = await task.create({ taskName, deadline });
  await task_user.create({ taskId: addTask.id, userId: req.userId });
  res.status(200).json(addTask);
});

module.exports = router;