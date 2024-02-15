const express = require('express');
const connection = require('../db/connection');
const validate = require('../middlewares/deleteTaskMd');

const router = express.Router();

// Apaga as tasks selecionadas (por id)

router.delete('/', validate.validateIds, async (req, res) => {

  // array de id's
  const { selected } = req.body;

  selected.forEach(async id => {
    await connection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);
  });

  res.status(200).json({ message: "As tarefas selecionadas foram apagadas" });

});

// Apaga uma Task por Id

router.delete('/:id', validate.validateIdParam, async (req, res) => {
  const { id } = req.params;

  await connection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);

  res.status(200).json({ message: "Tarefa apagada" })
});

module.exports = router;