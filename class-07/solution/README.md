# Solution: Bearer Authorization

## Lab Requirements

### Grading Standards & Notes

- Features
  - Students must implement at least 1 alternative means of token expiration
- Code Quality
  - Follow best practices
  - Code should be extensible
    - Modular logic, based on configuration from ENV
- Testing
  - Tests must be provided to assert token security and expiration
- Deployment
  - GitHub Actions
  - Cloud Application
- Documentation
  - README Standards
  - JSDoc Required
  - UML

### Solution Code Notes

This lab comes to the students in 'starter-code` and has 2 primary goals, both of which are covered in detail in the sections following

1. Fix the bugs in the server
   - Hint: When `npm test` works, most bugs are all fixed
2. Make the JWT tokens more secure
   - We've given them some ideas in the lab assignment. Below are some possible solutions
   - We want them to research and "think" about security with JWTs and find their own ideas

### BUG LIST

The Following list details the bugs in the code that the students should find

#### Setup

- `npm i` to install all dependencies listed in package.json.
- `npm i eslint` to install this missing dependency.
- connect to database: either postgres with `db:init` and `db:create`, or `'sqlite::memory'`.
- install all config files and confirm that the linter is working.

#### index.js

- Require `dotenv`, so `process.env.PORT` will work
- The server doesn't export a `start` method, so the start line will fail

#### server.js

- The server exports `startup`, not `start` which breaks the index. Fix one or the other

#### auth/router/handler.js

- `handleSignup`: set a status of 201 to pass test.
- `handleSignin`: `req` is the defined param, not `request`.
- `handleGetUsers`: 
  - `Users` should be `users`.
  - Array variable is `userRecords` therefore list should be assigned `userRecords.map(user => user.username)`.
- `handleSecret`: `.text` should be `.send` for test to pass.

#### auth/models/users.js

- need to define jwt and require  `jsonwebtoken`.
- we are not signing the token with `process.env.SECRET` so later, in bearer, we can't validate the token.
- `model.authenticateBasic`: `findOne()` is missing `{where: { username }}`
- `model.authenticateToken`: 
  - must await `this.findOne 
  - `findOne()` is missing a `{where: { username: parsedToken.username }}`.
  - need to `await` the bcrypt call in an `async` function, otherwise the password cannot be hashed.
  - model.authenticateToken() is invoked as `users.authenticateWithToken()` in `auth/middleware/bearer.js`. change one or the other to be consistent.

#### auth/middleware/basic.js

- must destructure `users` from `auth/models/index.js` instead of user.  see export in `auth/models/index.js`.
- `_authError` is not defined, use next instead: `{ next('Auth Error'); }`
- assign proper value to the `basic` variable: `let basic = req.headers.authorization.split(' ').pop()`.
- `username` and `password` (not `pass`) need to be destructured from array
- properly invoke by calling `users`, not `user` and passing password as an argument: `users.authenticateBasic(username, password);`

#### auth/middleware/bearer.js

- `users.authenticateWithToken()` is defined as `model.authenticateToken()`  in `auth/models/users.js`. change one or the other to be consistent.
- We're not calling `next()` in the try block, so the middleware never gets to the route even if it works

### JWT Security Ideas and Implementations

`users-model.js`

> Added expiration to the token create method, based on the TOKEN_EXPIRE env variable

```javascript
  users.methods.generateToken = function(type) {

    let token = {
      id: this._id,
      role: this.role,
      type: type || 'user',
    };

    let options = {};
    if ( type !== 'key' && !! TOKEN_EXPIRE ) {
      options = { expiresIn: TOKEN_EXPIRE };
    }

    return jwt.sign(token, SECRET, options);
  };
```

#### Single Use Tokens

`users-model.js`

- Created a set (usedTokens) that we reference in the `authenticateToken()` method.
  - This can be optionally turned on using the SINGLE_USE_TOKENS environment variable
  - If a token is in the set, we return an invalid token error
  - Otherwise, we add it to the set
  - This ensures that tokens are only ever used once.
- The middleware will always stamp `.user` and `.token` on the request object
- It's up to the routes that are authenticated to keep sending that back in the header

```javascript
users.statics.authenticateToken = function(token) {

  if ( usedTokens.has(token ) ) {
    return Promise.reject('Invalid Token');
  }

  let parsedToken = jwt.verify(token, SECRET);

  // Add to the scrap heap if we are in "one use token mode" and this token isn't a reusable "key"
  (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);

  let query = {_id: parsedToken.id};
  return this.findOne(query);

};
```
