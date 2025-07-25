'use strict';

// Add at the top of each test file or in jest.setup.js
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


// require('@code-fellows/supergoose');
const middleware = require('../middleware/basic.js');
const { db, users } = require('../models');

let testUsers = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
};

// // Pre-load our database with fake users
beforeAll(async (done) => {
  await db.sync();
  await users.create(testUsers.admin);
  done();
});
afterAll(async (done) => {
  await db.drop();
  done();
});

describe('Auth Middleware', () => {

  // admin:password: YWRtaW46cGFzc3dvcmQ=
  // admin:foo: YWRtaW46Zm9v

  // Mock the express req/res/next that we need for each middleware call
  const req = {};
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(() => res)
  }
  const next = jest.fn();

  describe('user authentication', () => {

    it('fails a login for a user (admin) with the incorrect basic credentials', () => {

      // Change the request to match this test case
      req.headers = {
        authorization: 'Basic YWRtaW46Zm9v',
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).not.toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(403);
        });

    }); // it()

    it('logs in an admin user with the right credentials', () => {

      // Change the request to match this test case
      req.headers = {
        authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalledWith();
        });

    });

  });

});
