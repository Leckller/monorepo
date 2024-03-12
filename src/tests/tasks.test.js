const { beforeEach, describe, it } = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { expect } = chai;
const app = require("../app");

chai.use(chaiHttp);

describe("Tasks tests", () => {
  it("Testa o metodo post", async () => {
    const request = await chai
      .request(app)
      .post("/tasks")
      .send({
        taskName: "tá na hora do pau",
        deadline: new Date()
      });

    expect(request.status).to.be.eq(200);
    expect(request.body).to.be.eq({
      message: "Tarefa 'tá na hora do pau' adicionada"
    });
  });

  it("Testa se recebe uma lista das ultimas tarefas", async () => {

  });
  beforeEach(() => sinon.restore());
});