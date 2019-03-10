const yahooApi = 'https://api.login.yahoo.com';
const requestAuth = '/oauth2/request_auth';
const getToken = '/oauth2/get_token';

module.exports = {
  yahooApi,
  requestAuth,
  getToken,
  redirect_uri: process.env.redirect_uri,
  credentials: {
    client: {
      id: process.env.y_id,
      secret: process.env.y_secret
    },
    auth: {
      authorizeHost: yahooApi,
      tokenHost: yahooApi,
      authorizePath: requestAuth,
      tokenPath: getToken,
    }
  },
}