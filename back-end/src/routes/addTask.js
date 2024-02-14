const express = require('express');
const connection = require('../db/connection');
const taskVerify = require('../middlewares/addTaskMd');

const router = express.Router();

router.post('/', taskVerify, async (req, res) => {
  const { task_name } = req.body;

  try {
    await connection.execute(`INSERT INTO tasks (task_name) VALUES (?)`, [task_name]);
  } catch (err) {
    res.status(304).json({ message: 'Alguma coisa está errada' });
  };

  res.status(201).json({ message: 'Tarefa Adicionada' });
})

module.exports = router;