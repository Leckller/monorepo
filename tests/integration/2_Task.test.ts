import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';
import TaskMock from '../mocks/task.mocks';
import SequelizeTask from '../../src/database/models/ModelsSequelize/Task.Sequelize';
import SequelizeUser from '../../src/database/models/ModelsSequelize/User.Sequelize';

chai.use(chaiHttp);

// Exemplo de uma maneira para usar seus mocks utilizando Classes
const mock = new TaskMock();

const mockUser = {
  email: "teste@gmail.com",
  password: "poweredByMocha"
}

async function stubToken() {
  sinon.stub(SequelizeUser, "findOne")
    .onFirstCall().resolves(null)
    .onSecondCall().resolves(SequelizeUser.build(mockUser));
  sinon.stub(SequelizeUser, "create").resolves(SequelizeUser.build(mockUser));

  const token = await chai.request(app).post("/user/cadastro")
    .send(mockUser);
  return token
}

describe.only('Teste 2 - Rota Task', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('01 - Envia uma solicitação com um token invalido', async () => {
    const req = await chai.request(app).post("/task/create")
      .set({ auth: "Bearer: certamenteNaoEUmToken" })
      .send(mock.validTask);

    expect(req.status).to.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "Senha ou Login Incorretos." });
  })

  it('02 - Cria uma tarefa', async () => {
    const token = await stubToken();
    sinon.stub(SequelizeTask, "create").resolves(SequelizeTask.build(mock.validTask))

    const req = await chai.request(app).post("/task/create")
      .set({ auth: `Bearer: ${token.body.data}` })
      .send(mock.validTask)

    expect(req.status).to.eq(201);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa criada." });

  })

  it('03 - Apaga uma tarefa', async () => {
    const token = await stubToken();
    sinon.stub(SequelizeTask, "findOne").resolves(SequelizeTask.build(mock.validTask))
    sinon.stub(SequelizeTask, "destroy").resolves()

    const req = await chai.request(app).delete("/task/delete")
      .set({ auth: `Bearer: ${token.body.data}` })
      .send({ taskId: 1 })

    expect(req.status).to.eq(200);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa deletada." });
  })

  it.only('04 - Edita uma tarefa', async () => {
    const token = await stubToken();

    sinon.stub(SequelizeTask, "findOne").resolves(SequelizeTask.build(mock.validTask));
    sinon.stub(SequelizeTask, "update").resolves();

    const req = await chai.request(app).patch("/task/edit")
      .set({ auth: `Bearer: ${token.body.data}` })
      .send(mock.editValidTask)

    console.log(req.body)

    expect(req.status).to.eq(200);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa editada." });
  })

  it('05 - Cria uma tarefa com nome invalido', async () => {
    const token = await stubToken();

    const req = await chai.request(app).post("/task/create")
      .set({ auth: `Bearer: ${token.body.data}` })
      .send(mock.invalidNameTask)

    expect(req.status).to.eq(400);
    expect(req.body).to.deep.eq({ data: false, message: "O nome da tarefa deve ter pelo menos 5 digitos." });
  })

  it('06 - Faz uma requisição pedindo todas as tarefas do usuario', async () => {
    const token = await stubToken();

    const req = await chai.request(app).get("/task")
      .set({ auth: `Bearer: ${token.body.data}` })

    console.log(req.body);
    expect(req.status).to.eq(200);
    // expect(req.body).to.deep.eq({ data: [], message: "Token invalido." });
  })

});
