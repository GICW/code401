# Facilitators Guide: Express

## Overview

Today, we start a new module, diving into the mechanics of NodeJS and Express API Building. The outcome of this module will be a fully functional REST API built with Express, using Postgres SQL as a persistence store.

In this first class we'll be diving deep into both Node.js modules and Express mechanics, building a relatively simple Express server, showcasing and diving into many of the core Express feature set. While the output of the application will be a simplistic server, the primary focus of the day should be in the detailed mechanics of NodeJS modules and the core tools that comprise Express servers - Route Handling & Middleware. We will also introduce server testing strategies, both visual (HTTP REST client) and automated.

It'll be your primary goal for the day to marry the tactical concepts of Express with the application goal of a usable API

### How does this topic fit?

**Where we've been**:
In previous courses, students will have been exposed to building Express servers to serve data to front end applications. Much of the focus they've had to this point will be in making their routes work (that is, to serve proper data), but with only a surface level understanding of how Express actually works under the hood.

**What are we focusing on today**:
Today, we'll be building on student's previous knowledge of various topics and taking a deeper dive into the mechanics, building an Express server with custom middleware, more thoughtful response codes, and proper testing techniques and coverage.

**Where we're headed**:
In the next lab, we'll be building on this newfound Express knowledge and layering on Routing, ReST and CRUD concepts by building out a full API that obeys the ReST standard.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice the demos
  - express api and routing demo (api-server)
  - express middleware demo (middleware)
  - Important points to have down: Using `next()` to control flow & manipulating the request object as it gets passed around
  - What other possibilities can your class come up with?

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- No code review, this is the first day of teaching

### Lecture notes

Lecture today is in three parts that are well supported by a meshing of demo/lecture.

**These concepts work best for students when explained in a blending of images and theory as you code the server.**

 Use the demo to support your theoretical points, it works great on a large content day such as this. While you will intertwine the lecture topics (node modules, basic express, middleware, routing) into a single demo app, avoid doing a straight 3 hour build. Weave the demo with your conceptual lecture, building out a larger application as you introduce the topics, layering on, and re-framing as you go.

### TOPIC 1: Module Overview

Inform students as to **what** they're going to be building during this module, **why** we're building it, and **how** it's going to fit into their lives as a developer and as a student.

- **Why** / **What** / **How** (10 min)
  - Build a scalable, tested API Server
  - Perform all database operations (CRUD) on any database table
  - We will be using this server in future modules
  - At the backbone of the WRRC is a server that handles the interactions between databases and the UI
  - Do a demo of the solution code for this module
    - No, it's not terribly exciting to simply send/receive JSON (...or is it??)
      - We can add, delete, update database records
      - We can store them forever
      - Clients can reliably get and use this tool to make great applications!

### TOPIC 2: TDD

Preface our approach to testing with the students. This is not meant to be a long lecture topic, but rather an introduction to the idea that things must be tested, what we might want to test, and the very basic wiring. You'll be writing tests as you demo, so use this time to preface what they're going to see, not to teach them all aspects of TDD.

- **Why** (5 min)
  - Testing Matters!
  - Visual Validation is "ok" but tests are permanent and reliable
- **What** (15 min)
  - We use `jest` to run our tests
  - We use `supertest` to test express routes
  - What do we test?
    - Do the routes produce the right status codes?
    - Do the routes produce the expected output, based on method and input?
    - Does our middleware do it's job correctly?
      - Is the request changed?
      - Do consoles log?
      - Was `next()` called properly?
- **How** (5 min)
  - Do a cursory explanation of the above, conceptually only
  - "As we write our code today, we'll be looking at ways to automate our testing so that we know that it's good"
    - Work the process into your demos today and every day, getting deeper as you go
  - On this first day, focus your testing simply on response codes just to get the wiring right
    - We will get better at testing more "interesting" things in the API as the module progresses

### TOPIC 2: Node Modules

- **Why** (5 min)
  - The power of node is in modularization and re-use (npm)
  - Level up your coding skills by thinking in smaller, re-usable, modules
  - Gain an understanding of how `require()` and `module.exports` work
- **What** / **How** (40 min)
  - Build Demo, phase 1 - error handlers as modules

### TOPIC 3: Express Routing & Requests

- **Why** (5 min)
  - Express provides easy access to the request and response
  - Controlling the HTTP Process
  - Routing is difficult, but Express provides mappings for us
- **What** / **How** (40 min)
  - The concept of routing can start with a simple drawing, but it's best seen with an interactive demo
    - Create a simple Express server demonstrating route types, mechanics, mistakes as well as some basic tests
    - Perform get, post, params, etc as you build out the server to demonstrate how routing works
  - The Request Object gives us access to the visible parts of the URI, and client information through headers
    - params, path, query string, browser type, cookies, etc
  - Express tries to match routes "top down"
    - As soon as it finds a route that can handle a request, it runs that one
  - When sending a `response`, we control the type and status
    - [Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
    - Its critical that the code matches what actually happened

### TOPIC 4: Express Middleware

- **Why** (5 min)
  - We may want to apply rules to a route
    - Is the person logged in? If not, don't run our handler function
  - We may want to alter the request
    - If a person is logged in, add their ID to the request
- **What** (10 min)
  - Middleware is any function that runs on the request
  - Middleware functions take 3 params: `request`, `response`, and `next`
  - These functions can perform any normal task as well as operate on the request object (create new props, read it, etc)
  - They can use the response object and send out a response
  - Most often, they can call the `next()` method, will simply run the next middleware function
    - e.g. `app.get('/test', logger, yeller, sleeper, (req,res) => {});`
    - Note that our handler function is technically middleware. It's just always the last middleware to run
- **How** (30 min)
  - `demo/middleware`
    - Do an interactive demo that hits on the following concepts
      - Express App level middleware (`express.json()`)
      - Custom Middleware that runs on every route using `app.use()` (e.g. a console logger)
      - Middleware that runs on some routes (defined inline with the route)
      - Middleware that writes a property onto the request object
      - Testing Middleware
- **Experimentation and Discovery Ideas**

## Lab Notes

- Following demo ... help the students break down the lab requirements with an interactive discussion
- Talk about separation of concerns and break the demo server down
  - Take student input on how they might modularize it and draw that out as a class
  - Talk through data modeling and remind them about extending classes
  - Lead them to the stretch goal with this conversation.
  - You will be doing that in the next code review session anyway

## What might students struggle with today?

-

## Past bugs, issues or surprises...

- This is a HUGE lab. It'll challenge them in big ways, specifically in how to break down monolithic code. It's their first time doing this, so help them to see where the separation is.
- Make assurances that the next code review will cover the gaps

## General Comments and Notes

- This is a big lab implementation.
  - Students will be extending it in the next class, so completion is very helpful, but not an absolute
  - Note that we're not giving a lot of definition around response status codes or data shape in this lab requirement. Just have them get it working. The next lab steps up those requirements.
