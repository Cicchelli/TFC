import { App } from "../app";
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeMatches from "../database/models/matchModel";
import { matches, matchesFinished, matchesInProgres } from "./mocks/matchsMock";

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes rota /matches', function () {
  beforeEach(function() {
    sinon.restore();
  });

  it('Deve retornar todos os times com o método GET', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matches as any);
    const { status, body } = await chai.request(app).get('/matches');
    
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matches);
  });

  it('Deve retornar os times filtrando por inProgress=true', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesInProgres as any);
    const { status, body } = await chai.request(app).get('/matches').query({ inProgress: 'true' });
    
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(matchesInProgres);
  });

  it('Deve retornar os times filtrando por inProgress=false', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesFinished as any);
    const { status, body } = await chai.request(app).get('/matches').query({ inProgress: 'false' });
    
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(matchesFinished);
  });
});
