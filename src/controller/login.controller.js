const express = require("express");
const { user } = require("../models");
const router = express.Router();
const { JWT: { genToken } } = require("../utils");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) res.status(400).json({ message: "Preencha Todos os Campos" });

  const userExists = await user.findOne({ where: { email, password } });
  if (!userExists) res.status(404).json({ message: "Login não encontrado" });

  const { token } = genToken({ email, password });

  res.status(200).json({ message: "Logado com sucesso", token });
});

module.exports = router;