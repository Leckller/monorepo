const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const sinon = require('sinon');
const connection = require('../db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('METODO DELETE', () => {
  it('Testa se é possivel apagar todas as tasks selecionadas pela toda /deleteTask', async () => {
    sinon.stub(connection, 'execute').resolves([{ message: "As tarefas selecionadas foram apagadas" }]);

    const req = await chai.request(app).delete('/deleteTask').send({
      selected: [1, 2, 3]
    });

    expect(req.status).to.be.eq(200);
    expect(req.body).to.deep.eq({ message: "As tarefas selecionadas foram apagadas" });
  });

  it('Testa se retorna um erro se o id não for um número', async () => {
    const req = await chai.request(app).delete('/deleteTask/issonãoéumnumero');

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ message: "O id deve ser um número" })
  });

  afterEach(sinon.restore);
});