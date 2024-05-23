import { Router } from "express";

const mainRouter = Router();

// Você pode apagar isso aqui
mainRouter.use('/', (req, res) => {
  res.status(200).json("Olá!")
})

// Para usar outro Router siga o seguinte exemplo
// ex: mainRouter.use("/(rota)", anotherRouter)

export default mainRouter;