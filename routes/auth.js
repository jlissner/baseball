const express = require('express');
const auth = require('../auth/auth')
const router = express.Router();
const {
  credentials,
  redirect_uri,
} = require('../auth/config')
const oauth2 = require('simple-oauth2').create(credentials)

router.get('/', async function(req, res, next) {
  try {
    const authorizationUri = await oauth2.authorizationCode.authorizeURL({
      redirect_uri,
    });

    return res.redirect(authorizationUri);
  } catch(err) {
    console.error(err);

    res.render('error', {
      error: err
    })
  }
});

router.get('/callback', async function(req, res, next) {
  const { code } = req.query;
  const tokenConfig = {
    code,
    redirect_uri,
  };

  try {
    const result = await oauth2.authorizationCode.getToken(tokenConfig)
    const { token } = oauth2.accessToken.create(result);
    const { access_token, expires_in } = token

    
    auth.token(access_token, expires_in)
  } catch (error) {
    console.log('Access Token Error');
    console.error(error)
  }

  res.redirect('/')
});

module.exports = router;
