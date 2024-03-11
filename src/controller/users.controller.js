const express = require("express");
const service = require("../service");
const router = express.Router();
const midds = require("../middlewares");

const { JWT } = require("../utils");
const { user } = require("../models");

router.post("/", async (req, res) => {
  const { email, password, nickName } = req.body;

  const verifyFields = await service.users.verifyFieldsLogin(req.body);

  if (verifyFields) return res.status(verifyFields.status).json({ message: verifyFields.message });

  const token = JWT.genToken({ email, password });

  await user.create({ email, password, nickName });

  res.status(200).json(token);
});

router.get("/", midds.validToken, (req, res) => {
  res.status(200).json("show");
});

module.exports = router;