const sinon = require("sinon");
const chai = require("chai");
const connection = require("../../db/connection");
const { insertTask, selectTask } = require("./tasks");
const { describe, it, afterEach } = require("mocha");

const { expect } = chai;

describe("Tasks Tests", () => {

  it("Testa a criação de uma task", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const data = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 1);

    const query = await insertTask("tarefa", data, limitDate, false, false);
    expect(query).to.be.eq(1);
  });

  it("Testa se retorna um array com uma task de id 1", async () => {
    const data = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 1);

    sinon.stub(connection, "execute")
      .resolves([[{ id: 1, name: "tarefa", data, limitDate, important: false, urgente: false }]]);

    const query = await selectTask(1);
    expect(query).to.deep.eq([{ id: 1, name: "tarefa", data, limitDate, important: false, urgente: false }]);
  });

  it("Testa se retorna um array de tarefas caso não seja passado um id", async () => {
    const data = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 1);

    sinon.stub(connection, "execute")
      .resolves([[{ id: 1, name: "tarefa", data, limitDate, important: false, urgente: false }, { id: 2, name: "tarefa2", data, limitDate, important: false, urgente: false }]]);

    const query = await selectTask();

    expect(query).to.deep.eq([{ id: 1, name: "tarefa", data, limitDate, important: false, urgente: false }, { id: 2, name: "tarefa2", data, limitDate, important: false, urgente: false }]);
  });

  afterEach(() => { sinon.restore(); });
});