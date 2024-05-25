import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserMock from '../mocks/user.mocks'
import { app } from '../../src/app';
import SequelizeUser from '../../src/database/models/ModelsSequelize/User.Sequelize';

chai.use(chaiHttp);

// Exemplo de uma maneira para usar seus mocks utilizando Classes
const mock = new UserMock();

describe('Teste 1 - Rota User', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('01 - Envia uma solicitação de cadastro', async () => {
    sinon.stub(SequelizeUser, "findOne").resolves(null)
    sinon.stub(SequelizeUser, "create").resolves(SequelizeUser.build(mock.createUser))

    const req = await chai.request(app).post('/user/cadastro').send(mock.createUser)

    expect(req.status).to.be.eq(201);
    // Espera receber um token de retorno do servidor!!!
    expect(typeof req.body).to.be.eq("string")
  });

  it('02 - Envia uma solicitação de cadastro com credenciais já cadastradas', async () => {
    const req = await chai.request(app).post('/user/cadastro').send(mock.createUser)

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ message: "Este email já está cadastrado." });
  });

  it('03 - Envia uma solicitação de cadastro com uma senha menor que 6 digitos', async () => {
    const req = await chai.request(app).post('/user/cadastro').send({
      email: "admin@gmail.com",
      password: "senha"
    })

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ message: "Sua senha deve ser maior que 6 digitos." });
  });

  it('04 - Envia uma solicitação de cadastro com um email invalido', async () => {
    const req = await chai.request(app).post('/user/cadastro').send({
      email: "admin@teste",
      password: "senha"
    })

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ message: "Email invalido." });
  });

  it('05 - Envia uma solicitação de login', async () => {
    const req = await chai.request(app).post('/user/login').send(mock.createUser)

    expect(req.status).to.be.eq(200);
    // Espera receber um token de retorno do servidor!!!
    expect(typeof req.body).to.be.eq("string")
  });



});
