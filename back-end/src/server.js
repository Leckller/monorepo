const app = require('./app');

const port = 6969;

app.listen(port, () => {
  console.log(`server rodando na porta ${port}`)
});