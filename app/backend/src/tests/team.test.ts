import { App } from '../app';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeTeam from '../database/models/teamsModel';
import { team, teams } from './mocks/TMock';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Teams Test', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('Retorna todos os times', async () => {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('Filtra pelo id', async () => {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);
    const { status, body } = await chai.request(app).get('/teams/2');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });

  it('Não encontra time pelo id', async () => {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(null);
    const { status, body } = await chai.request(app).get('/teams/3');
    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'Team not found' });
  });
});

