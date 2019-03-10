const auth = require('./auth')

describe('auth', () => {
  it('sets the token', () => {
    const token = 'test';
    const time = 3600;

    auth.token(token, time);

    expect(auth.token()).toEqual(token);
  });

  it('clears out the token when it is expired', async () => {
    const token = 'test';
    const time = 0;

    auth.setToken(token, time);

    await new Promise((res) => setTimeout(res, 1000));


    expect(auth.token()).toEqual('');
  });
})