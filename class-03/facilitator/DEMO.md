# Demos: Express REST API

Today's demo is setup as a progression of features. Each progression is provided to you as a new server file (`server-phase-1.js',`server-phase-2.js', `server-phase-3.js')

You are not to build each one separately, rather each one is given to you, so that you can see what to build next.

Begin by building with a `server.js`, modeled after `server-phase-1.js'. As you introduce new topics, refactor your`server.js` to operate like `server-phase-2.js`, etc

## Starting out (phase 1)

Begin the process by building a base, well modularized Express server with a single route and a test wired up

> If you did a build out during code review to re-cement the previous day's concepts, then you already have this completed and should use that as your starting point for the following demo progressions.

## Express Routing (phase 2)

> For this demo, you'll be simultaneously building out REST routes in a separate router. You will want to talk about the concept of REST while demonstrating the mechanics of Express routing. Seems like a lot, but if you make REST conversational, this flows really nicely.

- Build out a base express server, highlighting it's basic parts as you go
- Build 404, 500 middleware and put them into a middleware folder (talk briefly about modularization)
- Build in a logger middleware module
- Add 1 set of REST routes for a single resource
  - `app.get('/thing', ...)`
  - `app.get('/thing/:id', ...)`
  - `app.post('/thing', ...)`
  - `app.put('/thing/:id', ...)`
  - `app.delete('/thing/:id', ...)`
- Once it's all wired up, bring up the topic of modularization
  - Paint a picture of a server with 100+ routes
  - Routes often go together
  - Often, routes match models or behaviors
- `express.Router()'
  - Move those routes into a separate module in the  `routes` folder, called `v1`
    - Implement express.router() and export them
  - Import them back into the server
- **Route Prefixing**
  - Demonstrate prefixing the routes in the router
    - `app.get('/api/v1/thing, ...)`
  - Demonstrate prefixing the routes in the server and how that frees the router up to just focus on the resource and not the version
    - Server: `app.use('/api/v1', v1Routes);
    - Router: `app.get('/thing', ...)`
- **Params, Query Strings, and Data**
  - In the routes, incorporate handling of Query Strings, Route Params, Param based middleware, form submissions, json submissions
  - This is a fluid part of the demo to show the students the various ways we work with data from the client to make our routes have additional logic.

## Making the REST routes useful with data (phase 3)

- API routes (`app.method('/route', fn)`) are required for all rest methods for each resource
- Each route acts on the database
  - Directly?  For now yes, tomorrow we will create a class to make router logic more generic.
  - Use Sequelize model methods.
  - Server acts like a controller
    - "You want this thing?" ... "I know how to get it" ... "Hey Model! Do this thing" ... "Here you go." ... "And here YOU go."
- Create a Sequelize model that connects to a SQL database
  - Sequelize library is intialized with database configuration.
    - This can be done with a connection string: `postgres://localhost:5432/dbName`
    - can also be done with config files and a [cli](https://sequelize.org/master/manual/migrations.html)
  - Once connected, sequelize used schemas to create tables and perform CRUD.
    - `let Model = sequelize.define({ name: { type: DataTypes.STRING }})`
    - `Model.create()`
    - `Model.findAll()`
    - `Model.update()`
    - `Model.delete()`

    ```javascript
    const thingModel = require('../models/thing.js');

    app.post('/thing', async (req,res) => {
      // assuming req.body is an object that looks just like your data model ...
      let record = await thingModel.create(req.body);
      res.status(201).json(record);
    })
    ```
