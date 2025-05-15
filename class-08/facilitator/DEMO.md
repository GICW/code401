# Demos: Access Control (ACL)

## Users Model

> `/auth-server/users.js`

In this module, we'll make 2 small adjustments.

1. Add a roles "table" as a global object with the key being the role name and an array of 'capabilities'
1. In the generateToken function instead of just sending the username or id in the token, also put the capabilities in there for the user

> Assuming a user was created with the keys: `username`, `password`, and `role`, you can add a key called capabilities matched up to the users' role. Remember that as you demo this, you'll need to create your users in the `/signup` route with a role as well as a username and password

```javascript
const roles = {
  user: ['read'],
  editor: ['read','create','update'],
  ...
}

...

users.generateToken = function (user) {
  let userData = {
    username: user.username,
    capabilities: roles[user.role]
  }
  let token = jwt.sign(userData, SECRET)
  return token;
}

```

---

## Middleware

> `/auth-server/acl-middleware.js`

The express callback needs to be curried so that we can send in a param. As express registers that route, the `auth('write')` middleware actually runs immediately (it is technically being invoked there) and the actual middleware with normal signature is what's returned ... with the capability variable available within.

```javascript
router.get('/something', bearerAuth, acl('write'), (req,res,next) => { ... }

module.exports = (capability) => {
    // This is the actual middleware that lands on the route
    return (req,res,next) => {
      // In here, can always "see" capability
    }
}
```

The middleware itself will simply look at the `req` object and into the `capabilities` array if it exists.

```javascript
    if ( req.user.capabilities.includes(capability) ) { ... }
```

---
**TESTING**
There are examples of the test patterns given in the starter code. Students should complete the full gamut of tests and flesh out the suite.

## Grading Notes

Most of the requirements are completed for the students by the instructor in lecture.  This is mainly going to involve the students doing some re-implementations, troubleshooting, and digging in for testing.

There's plenty of opportunity here for modularization and simplification. While simply getting tests written and the features to work warrants a "complete", only go to a 10 if the students take the extra steps of code cleanup and modularization.
