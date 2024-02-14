const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const sinon = require('sinon');
const connection = require('../db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('METODO POST', () => {
  it('adiciona uma tarefa utilizando a rota /addTask', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ "message": "Tarefa Adicionada" }]);

    const req = await chai.request(app)
      .post('/addTask').send({ task_name: 'its a test' })

    expect(req.body).to.deep.eq({ message: "Tarefa Adicionada" });
    expect(req.status).to.be.eq(201);
  });

  it('testa o erro caso não tenha a chave "task_name" no body da rota /addTask', async () => {

    const req = await chai.request(app).post('/addTask')
      .send({ lucas: 'ok' });

    expect(req.body).to.deep.eq({ message: "Nome de chave incorreto" });
    expect(req.status).to.be.eq(400);
  });

  it('testa se o valor da chave task_name é menor que 5', async () => {

    const req = await chai.request(app).post('/addTask')
      .send({ task_name: 'test' });

    expect(req.body).to.deep.eq({ message: "O nome da tarefa é muito curto" });
    expect(req.status).to.be.eq(406);
  })

  afterEach(sinon.restore);
})
