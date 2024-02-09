const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('testes', () => {
  it('1', async () => {
    const request = await chai.request(app);
    expect(1).to.be.equal(true)
  })
})