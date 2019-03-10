const auth = require('./auth');
const middleware = require('./middleware');

describe('auth middleware', () => {
  const req = jest.fn();
  const res = {
    redirect: jest.fn(),
  }
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('forces the user to login if there is not a valid token', () => {
    middleware(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith('/auth');
  })

  it('lets the user continue if there is a valid token', () => {
    auth.token('sometoken', 1000)

    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  })
})