const sinon = require('sinon');
const chai = require('chai');
const connection = require('../../db/connection');
const { insertUser, selectUsers } = require('./user');

const { expect } = chai;

describe('User Tests', () => {

  it('Testa a criação de um user', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const query = await insertUser('ruy', 'ruy@teste.com');
    expect(query).to.be.eq(1);
  });

  it('Testa se retorna o usuario de id 1', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ id: 1, nickName: 'ruy', email: 'ruy@test.com' }]);
    const query = await selectUsers(1);
    expect(query).to.deep.eq({ id: 1, nickName: 'ruy', email: 'ruy@test.com' })
  })

  afterEach(() => { sinon.restore() });
})