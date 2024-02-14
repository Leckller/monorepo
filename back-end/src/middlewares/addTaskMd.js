module.exports = (req, res, next) => {
  const { task_name } = req.body;

  if (!("task_name" in req.body)) return res.status(400)
    .json({ message: "Nome de chave incorreto" });

  if (task_name.length < 6) return res.status(406)
    .json({ message: "O nome da tarefa é muito curto" });


  next();
} 