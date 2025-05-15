# Lecture Guide: Access Control (ACL)

## Wouldn't this be nice?

Imagine a change to our middleware that would allow us to specify not only if a user is logged in, but also if they have the permissions to the given task.

> Currently, all we can do is see if you are logged in then try and figure out what to do.

```javascript
  app.delete('/everything', bearerAuth, (req,res) =>{
    // If we're here, auth was good (you are logged in) !!!

    // Now, let's look at the JWT and your user account
    // and try to figure out if you're allowed to delete
    // things...

    // Yuck. Our route has to do 2 separate tasks :(
  })
```

> This would be far nicer... the route itself is protected by both checks.

```javascript
  app.delete('/everything', bearerAuth, permissions('delete'), (req,res) =>{
    // If we're here, auth was good
    // AND the permissions middleware also confirmed that you're allowed to delete things.
    // The logic in here only has to care about DELETE, not the other check!
  })
```

## TOPIC 1: Role Based Authorization

- **Why** (5 min)
  - Thus far, we've provided users a way to:
    - Sign Up for an account
    - Login with their username and password
    - Login using an OAuth provider
    - Re-Authenticate themselves with a Token
  - But ... this is a global boolean right now and doesn't give us the granularity we need
    - Either you're logged in or you're not
    - Authorization allows us to control what you can get to based on what type of user you are ...
- **What** (10 min)
  - Role Based Authorization groups users into categories
  - Depending on your category, you can perform certain tasks
  - When you attempt to access a resource or perform a task, we use your role to determine of you are permitted or not
    - Can you think of real world scenarios where this might be a good idea?
      - Can students change their grades in Canvas?
      - Can the waiter give you a refund if you didn't like your dinner?
      - Can bank tellers get into the vault?
- **How** (30 min)
  - Create a list of roles
    - i.e. Editors, Admins, Copywriters, Photographers
  - Create a list of capabilities
    - i.e. Create, Read, Update, Delete, Upload, Move
  - Map them together:
    - Editors: [Read, Update, Delete]
    - Copywriters: [Read, Create, Update]
    - Photographers: [Read, Upload]
    - Admins: [Create, Read, Update, Delete, Upload, Move]
    - Everyone Else: [Read]
  - This is one way to implement "Authorization"
    - Use this to group users by type
    - Grant certain capabilities or behaviors to each type of user
    - Then, restrict access to features based on capabilities
  - Back-End use cases:
    - Ability to do write operations on data
    - Which data can you access
  - Front end use cases:
    - Hide screens, buttons, content
- **Experimentation and Discovery**
