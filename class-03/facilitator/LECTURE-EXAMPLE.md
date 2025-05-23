# Lab Notes: Express REST API

## Middleware and Request Handling Review (Code Review)

- **Why** (5 min)
  - We want students to have a deeper understanding of how Express handles requests
  - How do web servers (specifically Express) handle requests?
  - How can we transfer data from client to our server?
- **What** (25 min)
  - The WRRC is a large process when you look at the big picture
  - On a small scale (just a server), it's got it's own WRRC
    - Route Method gets matched -- `app.<get|post|delete|put>()`
    - Route Path gets matched -- `app.get('/books')`
    - Request Object is inspected/altered by express
      - Query Strings -- <http://api.com?id=94&status=complete>`
        - The key/value pairs in the query string appear in the `request.query` object
      - Path parameters -- `app.get('/book/:id')`
        - Named params (`:anything`) appear in the `request.params` object
      - Request Body -- `request.body...` (where does this come from?)
        - Required Middleware: `app.use(express.json())` and `app.use(express.urlencoded({extended:true}))`
    - Middleware runs and can inspect/alter the request
      - `app.get('/book/:id', doThis, thenThat, ...)`
        - What are `doThis` and `thenThat`?
        - What params do they require/expect?
        - When does `thenThat` run?
    - Middleware can run at both the Route and the Application level
      - `app.use()`
      - Runs on every request
    - Server handles the request
      - `app.get('/books/:id', (request, response) => { response.status(200).send('hi there'); })`
      - What is `response`?
    - Summary: Within a server a request is received, parsed, appended, other requests can happen, and a response is given
      - It's a WRRC in a WRRC...
- **Experimentation and Discovery Ideas**
  - This segment of lecture really needs to be highly interactive - Drawing, build a simple server, etc
  - These are all concepts the students have seen and used in previous courses and labs
  - Let them drive the example routes, responses as you draw this out and lead the interaction

## HTTP, CRUD, and REST

- **Why** (5 min)
  - Distributed systems architectural pattern
  - JAM stack (and others like it - MERN, MEAN, GRAND)
  - More efficient (scale) and maintainable (teams) to separate data, services, ui
  - MVC isn't quite enough separation
- **What** (10 min)
  - CRUD - Review the terms, purposes, and what it means in the data layer
    - These are the things you can "do" to data
    - Create, Read, Update, Delete
    - Have we done this in the previous module? (yes)
  - HTTP - It's the tool we have
    - Stateless protocol
    - Every interaction is unique
    - Everything required to fulfill a request needs to be sent
  - REST
    - Representational State Transfer
      - Literally: A way to transfer (move) data (state), represented in a standard way (JSON/XML) between clients and servers
    - A standardized way to do CRUD using HTTP
    - Set of conventions (proper verbs, input and output specs)
      - POST = Create Data (CREATE)
      - GET = Retrieve Data (READ)
      - PUT/PATCH = Update or Modify Data (UPDATE)
      - DESTROY = Delete Data (DELETE)
    - Endpoints and Actions, Data and Behavior, Verbs and Nouns
- **How** (30 min)
  - Lots of pictures to be drawn in this segment
    - HTTP Protocol / Process
      - What happens when you request a web page? (focus on the headers and data)
      - What happens when you want to create or update an account?
      - Postal Envelope is a good analogy
        - Picture a request as an "Envelope" --- To and From are on the outside
          - If it's a GET, all of the info is on the outside (exposed) -- query string, path, etc
            - Request Headers are the To/From addresses
          - If it's a POST, then only the address is on the outside, but inside the sealed envelope is the BODY of the request that the server has to open and process
        - A Response can also be seen that way, coming back from the server
          - Also has request headers
          - Content is inside the envelope (the body)
        - Headers tell the clients and servers how to open the envelope and give hints as to what might be inside
        - SSL/TLS adds a layer of encryption in addition to the sealed body (with shared keys)
        - All requests are sent with a METHOD (Verb)
        - All responses come back with a code and data (Noun)
        - Headers on the outside (public,viewable), Body on the inside. Every message is totally unique
    - How do the CRUD methods map to HTTP methods?
      - A mapping chart showing how C.R.U.D. maps to the REST Verbs helps here
      - CREATE = POST, READ = GET, etc.
    - How does REST standardize those types of requests?
      - REST is how we do CRUD Operations using HTTP as the vehicle
  - It's also a solid demo to build out a `<form>` and change between GET and POST
    - View the network tab to view headers and body and how they are transferred differently
- **Experimentation and Discovery Ideas**
  - Do some interactive diagramming of their 301 projects (City Explorer, Book App)
    - Can students see how their requests resulted in data?
    - What might those remote servers be doing?

## REST APIs

- **Why** (5 min)
  - Developers want a common language
  - Before REST, there was SOAP, which was largely XML based, and very highly standardized (and heavy)
  - Before SOAP it was the wild west -- no standards. Every data store was unique and a large process to integrate
- **What** (10 min)
  - REST does a good job of having *some* standards, but also allowing services to operate esoterically
    - It's a standardized architectural pattern, but doesn't force you into a tight box
    - As an implementor, you can elect to honor some or all methods
    - As an implementor, you control the data contract (input requirements, output shape)
    - Requests, just like HTTP have parts
      - Methods: describe what you want to do to/with data: GET, PUT, POST, PUT, PATCH, DELETE
      - Body: is sent to a REST API to alter data, and also returned to the client on most requests
    - REST has a great documentation standard (Swagger and others) that provide easy ways to test and document APIs
- **How** (30 min)
  - Interactive demo
  - Have students drive the model that you create. The demo is for categories and products, but you can do anything. Let them have fun with the problem domain during demo.
  - Most services require auth/auth
  - Web servers usually don't go directly to a REST API
  - Many larger companies use a middle tier to act as proxy to services
  - Browser - Web Server - (Services) - Web Server - Client

## ORMs

- **Why** (5 min)
  - Different databases have different specifics but they all have the same outcome (CRUD).
  - An ORM let's developer's perform CRUD, while the ORM library handles the database specifics.
- **What** (10 min)
  - "Object Relational Mapping"
  - `Sequelize` supplies a common API to perform SQL specific operations.
    - Connects to a SQL database.
    - Can be configured with multiple SQL dialects.
    - Consumes "schemas" to shape our data and produces a "Model".
      - Models have methods that let us perfrom CRUD among other things.
- **How** (20 min)
  - Create a "People" Schema and Model.
  - Use the model to create / read a few records in a javascript file.
  - Add the model to the express router and perfrom necessary CRUD.
