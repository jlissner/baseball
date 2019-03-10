const auth = require('./auth');

function authenticate(req, res, next) {
  if (auth.token() === '') {
    return res.redirect('/auth');
  }

  next();
}

module.exports = authenticate