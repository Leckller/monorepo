const express = require('express');
const connection = require('../db/connection');

const router = express.Router();

// Apaga as tasks selecionadas (por id)

router.delete('/', async (req, res) => {

  // array de id's
  const { selected } = req.body;

  selected.forEach(async id => {
    await connection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);
  });

  res.status(200).json({ message: 'As tarefas selecionadas foram apagadas' });

});

// Apaga uma Task por Id

router.delete('/:id', async (req, res) => {

});

module.exports = router;