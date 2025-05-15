const validatorMiddleware = require('../src/middleware/validate.js');

// Tested middleware needs to either be exported from the server or a separate module
describe('name validator middleware', () => {

  it('rejects requests without a name', () => {

    let req = { query: {} };
    let res = {};
    let next = jest.fn(); // spy on next metho

    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith('Name Required');
  });

  it('allows requests with a name', () => {
    let req = { query: { name: "Test Name" } };
    let res = {};
    let next = jest.fn(); // spy on next metho

    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith(); // no param means no path
  });

});
