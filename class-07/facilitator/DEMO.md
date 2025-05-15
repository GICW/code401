# Demo: Bearer Authorization

Today's demo is an add-on to the same simplistic auth server that you've been building during the course of this module. Your demo here needs to focus on the process of Bearer Authorization, not the implementation of the Sequelize methods to make it happen. In the industry, this will be done with many different data sources/ORMs. Show them the steps needed to Validate and create a token with middleware, than layer on Sequelize to let our model handle any operation that requires user data.

## Protected Routes and Middleware

> Run `nodemon` as you build this demo. It'll be in an error state until you've hit the basic requirements, and is good for the students to see this process.

First, build the middleware that will handle the Bearer Token. This needs to simply find the token in the header, call a method in the users model, and then call .next() appropriately.  Because the students have a frame of reference for this (basic-middleware.js), you should be able to make a few 1:1 comparisons on the process.

- `bearer-auth-middleware.js`
  - This is **very** similar to the basic auth middleware
    - Exports a method
    - Pulls out the token from the authorization header
    - Calls a user model method to validate the token
    - Calls .next() if the user was valid
    - Calls .next(err) to trigger Express error if not

Once you have the middleware created, build a simple route that requires Bearer Authorization to work. This simulates someone has already logged in and has a token. That token is required to see the data.

- `app.js`
  - Require the new middleware
  - Put in a route that uses it
    - `app.get('/something', bearerAuth, (req,res) -> {...} )`
    - Why did we make this a separate middleware?
      - Basic requires a username/password (we don't want that send on every request)
      - Basic Middleware returns a bearer token
      - Bearer Middleware just calls next (you are ok to hit the next process)
      - This gives you an enormous amount of flexibility in building your API and other routes

## Users Model

At this point, you've created middleware and a route, but don't have the ability to validate the token. If you've been running `nodemon`, and try to make accounts, login, and then validate a token, you'll probably be seeing errors such as "No such method" on the users model. Let's build that method.

- Note that the middleware is requiring a promise (it uses a `.then()`)
  - We will therefore need to resolve or reject in the method we're about to build
- The users model needs a new method called `authenticateToken(token)`
  - This method will call `jwt.validate()` with the token and the secret
    - If any bit of this is incorrect (token string changed, wrong secret, etc), that method call will raise an error
      - This is why it's in a `try{} catch(){}`
      - Use that `catch()` to return `Promise.reject()` which the middleware will then also catch
    - If it's a valid token, return `Promise.resolve()`
      - We don't need any data here, just permission to keep going (Resolve or Reject is effectively boolean)

## Testing and Validation

Demo [jwt.io](http://jwt.io) and how they can validate tokens.

Also, demo hitting your Auth Server with various tools to validate logins:

- **httpie**: http post :3000/secret "Authorization:Bearer TOKENSTRING".
- HTTP REST Client: Use authorization headers.
- Chrome directly, using the Headers extension.

## Past bugs, issues or surprises...

## General Comments and Notes

The demo today is purely for wiring purposes. The lab that the students will do takes the token process further (dates, storage, re-generating) as brought up during the main lecture.
