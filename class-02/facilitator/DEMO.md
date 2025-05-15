# Demos: Express

All of the demos for this lecture are in the same server file, separated by sections, with notes on each of the routes

You can build this up progressively through each part of the lecture, or you can build 3 separate servers (to keep reinforcing how to build an express server from scratch). Building 3 servers takes time, so use your judgement on focusing on mechanics vs concept, based on the time you have in your day, and how long you lecture on each concept.

**TESTS and TDD** -- note that there is a suite of tests that showcases how to wire up `supertest` to test out our server during development. It's important that students see all aspects of testing servers. Don't focus on a single aspect, but rather use them all as you go.

It works well to start with an HTTP REST client, then say something like "It's really annoying to have to go back and forth between the editor and the app to test" ... then switch to the command line, using the terminal in your editor. At least it's all on one screen. Even that can be a chore, as you have to keep re-running requests. This is a good time to introduce actual tests. Maybe roll this into Phase 3.

1. Visually, using an HTTP REST client with a GUI.
1. Visually, from the command line using a tool such as `httpie` or `curl`.
1. Tactically, using tests to assert that things are perfect as expected.

## Phase 1: Modules and Routing

Build out a basic Express server with the following teaching points on modularity:

- `index.js` - Entry Point. Requires our server module and starts it
- `server.js` - Controller. Brings in express and sets it all up
  - Make some `/hello` route variations (get and post)
    - Refresh students on `req.query`, `req.params`, `req.body`
  - Error Handling: Begin with the 404 and 500 handlers built into the server

    ```javascript
    app.use('*', (req,res) => {
      const errorObject = {
        status: 404,
        message: 'Sorry, we could not find what you were looking for'
      }
      res.status(404).json(errorObject);
    })

    app.use('*', (req,res) => {
    // Sometimes, errors come in as an object, others as a string
      const error = err.message ? err.message : err;

      const errorObject = {
        status: 500,
        message: error
      }
      res.status(500).json(errorObject);
    })
    ```

- Then, pull those out into modules and require/use them instead
  - `error-handlers/xxx.js` - 404 and 500 error handlers, created as **node modules** and brought in with `require()`

## Phase 2: Middleware

- Add some middleware
  - `logger()` which console logs the current request
    - This one runs on every request.
    - `app.use(logger)` at the top of the app.
  - `getBrowser()` which adds the users browser name to the `req` object
  - `number()` which takes a number, squares it, and adds that to the `req`
    - This one is curried. Complex, but important
- Once the core concepts are understood, refactor the "logger" middleware as a module

This should be an interactive demo.

## Testing

- `server.js` exports an object, so that we can test it without having to start
- `__test__` has the tests in it
  - `server.test.js`
    - require supertest -- `const supertest = require('supertest')`
    - create a mock "tester" by using our server with supertest
      - `const {server} = require('../server.js')`
      - `const mockRequest = supertest(server)`
    - Demonstrate both promise and async syntax in your `it()` blocks
    - Assert - response status, maybe some text
