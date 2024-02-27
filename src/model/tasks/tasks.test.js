const sinon = require('sinon');
const chai = require('chai');
const connection = require('../../db/connection');
const { insertTask, selectTask } = require('./tasks');

const { expect } = chai;

describe('Tasks Tests', () => {

  it('Testa a criação de uma task', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const data = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 1)
    const query = await insertTask('tarefa', data, limitDate, false, false);
    expect(query).to.be.eq(1);
  });

  it('Testa se retorna a task de id 1', async () => {
    const data = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 1)

    sinon.stub(connection, 'execute')
      .resolves([[{ id: 1, name: 'tarefa', data, limitDate, important: false, urgente: false }]]);
    const query = await selectTask(1);
    expect(query).to.deep.eq([{ id: 1, name: 'tarefa', data, limitDate, important: false, urgente: false }])
  })

  afterEach(() => { sinon.restore() });
})