/* eslint-disable no-undef */
const app = require("./app");

const port = process.env.PORT || 3009;

app.listen(port, async () => {
  console.log(`server rodando na porta ${port}`);
});