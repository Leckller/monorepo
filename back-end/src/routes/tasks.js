const express = require('express');
const connection = require('../db/connection')
const router = express.Router();

router.get('/', async (req, res) => {
  const [DB] = await connection.execute('SELECT * FROM tasks');

  res.status(200).json(DB)
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const [DB] = await connection.execute(`SELECT * FROM tasks WHERE task_name LIKE "%${name}%"`);

  if (DB.length === 0 || "message" in DB) return res.status(404).json({ message: "Nenhuma task encontrada" });

  res.status(200).json(DB);
});

module.exports = router;