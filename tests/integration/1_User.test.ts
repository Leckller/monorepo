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
    expect(req.body.message).to.be.eq("Cadastro realizado com sucesso.")
  });

  it('02 - Envia uma solicitação de cadastro com credenciais já cadastradas', async () => {
    sinon.stub(SequelizeUser, "findOne").resolves(SequelizeUser.build(mock.createUser))

    const req = await chai.request(app).post('/user/cadastro').send(mock.createUser)

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "Este email já está cadastrado." });
  });

  it('03 - Envia uma solicitação de cadastro com uma senha menor que 6 digitos', async () => {
    const req = await chai.request(app).post('/user/cadastro').send({
      email: "admin@gmail.com",
      password: "senha"
    })

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "Sua senha deve ser maior que 6 digitos." });
  });

  it('04 - Envia uma solicitação de cadastro com um email invalido', async () => {
    const req = await chai.request(app).post('/user/cadastro').send({
      email: "admin@teste",
      password: "senhaPoderosa"
    })

    expect(req.status).to.be.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "Email invalido." });
  });

  it('05 - Envia uma solicitação de login', async () => {
    sinon.stub(SequelizeUser, "findOne").resolves(SequelizeUser.build(mock.createUser))

    const req = await chai.request(app).post('/user/login').send(mock.createUser)

    expect(req.status).to.be.eq(200);
    // Espera receber um token de retorno do servidor!!!
    expect(req.body.message).to.be.eq("Bem vindo de volta!")
  });


  afterEach(function () {
    sinon.restore()
  })
});
