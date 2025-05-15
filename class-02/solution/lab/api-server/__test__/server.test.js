'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.post('/person');
    expect(response.status).toBe(404);
  });

  it('should respond properly on request to /person with a name', async () => {
    const data = { name: "test" }
    const response = await mockRequest.get('/person').query(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data)
  });

  it('should respond with an error on request to /person without a name', async () => {
    const data = {};
    const response = await mockRequest.get('/person').query(data);
    expect(response.status).toBe(500);
  });

});
