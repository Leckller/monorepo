/* eslint-disable no-undef */
const app = require("./app");

const port = process.env.SERVER_PORT;

app.listen(port, async () => {
  console.log(`server rodando na porta ${port}`);
});