# Demos: Node Ecosystem

Note: Demos as they exist in the `/demo` folder are provided in their **completed** state.

## Node Server

> `demo/how-fast-is-node`

- This demo showcases just how fast Node.js can be
- Write it quickly and run the shell script (changing the params) show just how much concurrent load a simple node app can handle
- It's super cool to see how many requests per second javascript can deal with

## Tested, Deployed Server

> `demo/server`

For this demo, build out a very simple express server. 75% of this will be a review of what they already know from 301. What's new here will writing a few tests, and moving the 404/500 handlers to separate files (modules). You'll also write a very simple piece of middleware. The goal with this build is threefold:

1. Review of the concepts they already know
1. Sprinkle in modules, middleware, tests at a surface level.
   - You will teach more on these in the coming days. Today, just **show the new concepts** as a way of seeding them with the terminology
1. Show them how a professional developer works
   - Planning, Organization, Git Process, CI/CD

### Work like a real dev ...

- Draw the WRRC (UML Style) of this application
- Start with an empty repository at Github
  - Create with a README and a .gitignore
- Clone your repo and work in a `dev` branch
- Scaffold out a basic working environment
  - `npm init`
  - .eslintrc.json (from the class configs folder)
  - .gitignore (from the class configs folder)
  - Create your basic app structure
    - `README.md`
    - `server.js`
    - `__tests__/server.test.js.js`
    - `handlers/404.js`
    - `handlers/500.js`
    - `middleware/stamper.js`
- Create one route called '/' that sends a simple string to the browser
- Create one route called '/data' that sends a simple object to the browser
- Move your 404 and 500 error handlers to a separate file/folder
  - Unlike in 301, these can now be external modules, making things clean
- Add a simple middleware called "stamper" and add it to both routes
  - This can add something simple to the request object
    - Don't need a ton of detail here, just show it ... we do a deeper dive in a future class
- Write a test of your route

**Connect your `dev` and `main` branches to separate apps at your cloud service provider, to show that each branch can be deployed separately, and that both of the deployments are contingent on your tests passing with GitHub actions**

## Takeaways

- Plan, plan, plan ... don't write code until you know what you're going to do
  - A server with 2 routes, one saying hello, one giving data, with some middleware and a test
  - Draw it, Scaffold it, Fill in the blanks. Teach them APPROACH
- `module.exports` can return anything
- `require()` gets whatever `module.exports` gave you
- Proper README -- make sure students know how to document a lab properly.
