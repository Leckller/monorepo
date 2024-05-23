import express from "express";
import cors from 'cors';
import mainRouter from "./routes";
require('express-async-errors');

export default class App {
  public app = express()

  constructor() {
    this.app.use(express.json());

    // Altere a configuração do cors para receber requisições de endereços especificos.
    this.app.use(cors({ origin: '*' }))

    // index router
    this.app.use(mainRouter);
  }

}

const { app } = new App();

export { app };