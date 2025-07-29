import { testServer } from './jest.setup'; // ajuste o caminho

describe('Teste exemplo', () => {
  it('Deve responder status 200', async () => {
    const res = await testServer.get('/rota');
    expect(res.status).toBe(200);
  });
});
