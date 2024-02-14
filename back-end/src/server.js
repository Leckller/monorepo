const app = require('./app');
const connection = require('./db/connection')

const port = 6969;

app.listen(port, async () => {
  console.log(`server rodando na porta ${port}`)
});