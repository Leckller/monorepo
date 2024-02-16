const express = require('express');
const connection = require('../db/connection')
const router = express.Router();
const { models } = require('../model');

router.get('/', async (_req, res) => {
  const DB = await models.getAllTasks();

  res.status(200).json(DB)
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;

  const DB = await models.getTasksByName(name);

  if (DB.length === 0 || "message" in DB) return res.status(404).json({ message: "Nenhuma task encontrada" });

  res.status(200).json(DB);
});

module.exports = router;