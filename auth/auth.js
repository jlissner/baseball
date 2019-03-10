const moment = require('moment');

class Authenticator {
  constructor() {
    this._token = '';
    this._refresh = '';
  }

  token(token, refresh) {
    if (token) {
      this.setToken(token, refresh);
    }

    return this.getToken();
  }

  setToken(token, refresh) {
    const now = moment().utc();
    const expires = now + (refresh * 1000);

    this._token = token;
    this._refresh = expires;
  }

  getToken() {
    const now = moment();
    const timeLeft = this._refresh - now;
    const isExpired = timeLeft < 1;

    if (isExpired) {
      return this.resetToken();
    }

    return this._token;
  }

  resetToken() {
    this._token = '';
    this._refresh = 0;

    return this._token;
  }
}

module.exports = new Authenticator()