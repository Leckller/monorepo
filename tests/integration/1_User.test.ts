import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserMock from '../mocks/user.mocks'
import { app } from '../../src/app';

chai.use(chaiHttp);

// Exemplo de uma maneira para usar seus mocks utilizando Classes
const mock = new UserMock();

describe('Teste 1 - Rota User', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('01 - Testa se a rota "/" retorna a mensagem "Olá!', async () => {
    const req = await chai.request(app).get('/')

    expect(req.status).to.be.eq(200);
    expect(req.body).to.be.eq("Olá!")
  });

});
