# Lecture Guide: Node Ecosystem

## TOPIC: Node, Modules, TDD, NPM, CI (~1 hour)

> Students have seen this at a surface level in 301 (light TDD, light Express).  Now, we will take a deeper look at what it means to be a professional developer and begin to create habits and adopt patterns that are used throughout the industry.

- **Why** (5 min)
  - Node.js Development Ecosystem
  - Professional development patterns and habits
  - Tests are important for code safety and scalability
  - Modules are important for code readability, reuse, scalability
- **What** (10 min)
  - What is Node?
    - Environment? Server? Compiler? Interpreter? Yes!
  - What is a server?
    - This inevitably comes up ...
    - Show some pictures of huge servers and server farms and blades and whatever.
    - Your laptop is also a server (physically) just like those
    - Software can also be a server
    - Functions are also servers
    - **Anything that can accept a request and serve back an answer is a server**
    - In an app, you have clients and servers at every logical point in code
    - So ... no, Node.js is not a server, it's a tool you can use to make a server
  - Where and how is Node used? Who uses it? Why?
    - Enterprise applications - AWS, APIs, Content Delivery
    - Supports all of the ['ilities](https://codesqueeze.com/the-7-software-ilities-you-need-to-know/) ...
      - Scalability
      - Extensibility
      - Testability
      - ...
  - Great, we can make big things with it, but how do we actually USE it like a pro?
    - Modular Programming (learn to break things down for reuse and testing)
    - Test Driven Development (TDD)
    - Documentation (JSDoc)
- **How** (45 min)
  - The "What" of this lecture (above) is best delivered as a quick introduction to "Why Node.js is great"
  - Make the points, though, through a live coding demo that supports your assertions.
  - The `server` demo has a `test.sh` file that you can use to show how fast Node.js servers can be
    - (this one does 10000 requests, 100 at a time!)
    - This is a good opportunity to review what Node is actually doing to make this application run.
      - Finds the .js file
      - Reads the file contents
      - Compile the code (reporting any syntax errors)
      - Runs the code
      - Produces any output
  - Spend most of your demo time creating a proper server with GitFlow branching, Tests, and a CI/CD pipeline with Actions and cloud deployment
