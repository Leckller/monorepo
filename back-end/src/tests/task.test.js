const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('testes', () => {
  it('1', async () => {
    const request = await chai.request(app).get('/tasks');
    console.log(request.body)
    expect(request.body).to.deep.eq({ message: 'eita' })
  })
})