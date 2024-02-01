import { expect } from 'chai';
import HTTPMap from '../utils/httpStatusMap';

describe('HTTPMap Tests', () => {
  it('Verifica as chamadas da função HTTPMap', () => {
    const success = HTTPMap('SUCCESSFUL');
    const invalid = HTTPMap('INVALID_DATA');
    const notFound = HTTPMap('NOT_FOUND');
    const conflict = HTTPMap('CONFLICT');
    const unauthorized = HTTPMap('UNAUTHORIZED');
    const defaultReturn = HTTPMap('teste');

    expect(success).to.equal(200);
    expect(invalid).to.equal(400);
    expect(notFound).to.equal(404);
    expect(conflict).to.equal(409);
    expect(unauthorized).to.equal(401);
    expect(defaultReturn).to.equal(500);
  });
});
