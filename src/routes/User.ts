import { Router } from "express";
const routerUser = Router();

routerUser.use('/login', (req, res) => {
  res.status(200).json("Olá!")
})

routerUser.use('/cadastro', (req, res) => {
  res.status(200).json("Olá!")
})

export default routerUser;