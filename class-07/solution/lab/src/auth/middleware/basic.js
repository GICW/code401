'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { return _authError(); }

    let basic = req.headers.authorization.split(' ').pop();
    let [username, pass] = base64.decode(basic).split(':');

    req.user = await users.authenticateBasic(username, pass);
    next();
    
  } catch (e) {
    _authError()
  }

  function _authError() {
    res.status(403).send('Invalid Login');
  }

}
