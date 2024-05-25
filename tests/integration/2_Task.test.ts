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

describe('Teste 1 - Rota User', function () {
  beforeEach(function () {
    sinon.restore();

  });

  it('01 - Envia uma solicitação com um token invalido', async () => {
    const req = await chai.request(app).post("/task/create")
      .set({ auth: "Bearer: certamenteNaoEUmToken" })
      .send(mock.validTask);

    expect(req.status).to.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "Token invalido." });
  })

  it('02 - Cria uma tarefa', async () => {

    sinon.stub(SequelizeUser, "findOne").resolves(null);
    sinon.stub(SequelizeUser, "create").resolves(SequelizeUser.build(mockUser));

    const token = await chai.request(app).post("/user/cadastro")
      .send(mockUser);

    sinon.stub(SequelizeTask, "create").resolves(SequelizeTask.build(mock.validTask))
    const req = await chai.request(app).post("/task/create")
      .set({ auth: `Bearer: ${token}` })
      .send(mock.validTask)

    expect(req.status).to.eq(201);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa criada." });

  })

  it('03 - Apaga uma tarefa', async () => {
    sinon.stub(SequelizeUser, "findOne").resolves(null);
    sinon.stub(SequelizeUser, "create").resolves(SequelizeUser.build(mockUser));

    const token = await chai.request(app).post("/user/cadastro")
      .send(mockUser);


    const req = await chai.request(app).delete("/task/delete").send({})

    expect(req.status).to.eq(200);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa deletada." });
  })

  it('04 - Edita uma tarefa', async () => {
    const req = await chai.request(app).patch("/task/edit").send({})

    expect(req.status).to.eq(200);
    expect(req.body).to.deep.eq({ data: true, message: "Tarefa editada." });
  })

  it('05 - Cria uma tarefa invalida', async () => {
    const req = await chai.request(app).post("/task/create").send({})

    expect(req.status).to.eq(400);
    expect(req.body).to.deep.eq({ data: "", message: "O nome da tarefa deve ter pelo menos 5 digitos." });
  })

  it('06 - Faz uma requisição pedindo todas as tarefas do usuario', async () => {
    const req = await chai.request(app).get("/task").send({})

    expect(req.status).to.eq(200);
    console.log(req.body);
    // expect(req.body).to.deep.eq({ data: [], message: "Token invalido." });
  })

});
