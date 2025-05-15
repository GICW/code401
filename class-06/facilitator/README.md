# Facilitators Guide: Authentication

## Overview

In this first class in the Authentication/Authorization (auth/auth) module, we will focus on Basic Authentication by building an "auth" server that will be able to create a new user (signup) and authenticate that user with a username+password (signin). We'll be creating some custom middleware to make this more modular.

### How does this topic fit?

**Where we've been**:
In a previous module, students worked with HTTP and REST to create APIs that could operate on SQL data models. They will be familiar with Express, Routing, Middleware, Modularization, and Server Testing.

**What are we focusing on today**:
Today's focus is on building an Express server with a single purpose: Authentication. The source for this server will be created in such a way as to be easily integrated with their previously built API server.

**Where we're headed**:
In the next class, we'll be extending our server with "Bearer Authentication" which allows a user that has logged in with a username and password to re-authenticate on subsequent requests with a token.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

This is a big day, as it's the initial build of a multiple stage authentication server build.

Have some interesting real-world examples and talking points about web security, password storage, password hashing, salting, 2-factor authentication, etc. Once you open up those topics, the questions pour in. It's definitely through some of these questions that you'll get to dig into some real examples, tap into your experience, and add some depth to the topic.

- Practice the demos
  - [the demo](../demo/passwords) on Base64 Encoding and bcrypt Encryption (passwords)
  - Basic Authentication in a simple server (basic/app.js)
  - Basic Authentication as middleware (basic/better-app.js)

The students will be stitching all of these concepts together to create their own server.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- There's no carryover code today for code review
- You can use this time to review the previous Module's Data Structure Implementation or share a student's final API server implementation

### TOPIC 1: Authentication

> This initial part of lecture is intentionally "Big Picture" so that students can understand the broader view / architecture that they will need to implement.

- **Why** (5 min)
  - Websites have many things that only certain people can see, hidden behind a "login"
    - Profile Information, Balances, Friends Lists, etc
  - APIs have data that they might want to restrict access to
- **What** (10 min)
  - Authentication vs Authorization
    - Authentication = Valid Identity = "You are who you say you are"
    - Authorization = Permissions  = "You are allowed access based on who you are"
  - Authentication Process
    - User accounts exist on a server with passwords stored securely
    - Users provide their login credentials (username + password) to a server
    - The server matches up what is stored vs what was sent
    - Responds back with a token or some key that can be re-used by the client/user
- **How** (30 min)
  - Interactive Discussion & Drawings
    - Focus on the process and flow (user -> server -> database -> check password -> true/false -> back to website)
    - How can we prove who you are who you say you are?
    - What might a server/system need to look like to handle the login processes?
- **Experimentation and Discovery Ideas**
  - Students have encountered all of these ideas before (other than the encryption piece) as users of the internet
  - Allow them to drive some of the solutions
  - See if they can see the flaws in the systems they have used

## TOPIC 2: Encoding and Encryption

- **Why** (5 min)
  - In a simple login form or "basic" authentication, we must send the username/password to the server in plain text.
  - In basic authentication, they are encoded using base-64 which only obfuscates, but does not encrypt
  - We therefore leave it to the server to decode, and then find a safe way to store it for later checking
  - Servers are inherently insecure and targets for hackers, so we need to "encrypt" passwords in a unidirectional fashion
- **What** (10 min)
  - Base64 Encoding
    - Simple encoding that does a transformation of characters into another character string
    - You can encode/decode and always get the same strings in both directions
  - Encryption (using bcrypt)
    - One Way Cipher (hash)
      - You can "encrypt" a string, but can never "decrypt" it again.
      - The only way to validate a string (like a password) against something that was encrypted would be do encrypt the string again and let the algorithm decide if the 2 encrypted versions of that string match up.
- **How** (30 min)
  - Interactive Demo (demo/passwords)
    - Base64: Create a user:pass combination and encode/decode it
    - bcrypt: Create a password, `.hash()` it multiple times, `compare()` it to see the boolean validation

### TOPIC 3: Authenticating Users

- **Why** (5 min)
  - A truly authenticated system can manage it's own users
  - Users should be able to
    - Sign Up
    - Sign In
    - Edit Themselves
    - Delete Themselves
- **What** (10 min)
  - Have the students help drive the "how" and even identify these steps.
  - We can use a Sequelize Schema to create a users collection in Postgres.
  - We can create an express server that has the appropriate routes
    - `app.post('/signup')` to create a user
      - POST (creating a user)
      - Check uniqueness
      - Hash the Password
      - Create the user record
      - Return a token
    - `app.post('/signin')` to attempt a login
      - Send username:password as a Base64 Encoded header
      - Find the user in the collection by their username
      - Re-Hash the plain text password used to login and compare it to what we saved for that user
      - If good, send back a token as the response
      - Otherwise, force an error
- **How** (30 min)
  - Interactive Demo, built in stages
    - First, build a very simple, in-memory, monolithic server that does a signup and signin using the steps above
    - Then, refactor it (better-app.js) to use middleware for auth and a simple user model
      - This gives us a chance revisit all of the auth concepts again during the refactor **as well as** to demonstrate good engineering practices
  - Note: We're returning the user a JWT token. For this lab, gloss that over. We'll get deep with them a few labs from now
- **Experimentation and Discovery Ideas**

## Lab Notes

Demo will be a simplistic basic express server that does authentication in a semi-modular way. All of the tools they need (aside from a Sequelize model) are there for them in the demo in one form or another. Conceptually, they'll have great references, but they'll need to architect and code up a real, working server on their own. This will be a big build for them, so be ready for lot of "where do I start" questions

- Continue to work with the students on setting breakpoints to troubleshoot
- Assert with them the ways to know that things are working properly
  - Unit and Integration Tests
  - Manual testing with an HTTP REST client.

Moving forward, labs will guide students to leverage AI to write tests.  Encourage students to use what they already know about testing, TDD whenever possible, and provide meaningful prompts to AI to generate tests for their code.  They should also document their process. On their `README`, students should list the prompt they gave to AI and name the specific AI contributions.  

## What might students struggle with today?

- Getting Started. Having to build a big server with no starter code will seem daunting.
- Guide them through the basics
  - They know how to build an express server
  - They know how to create routes in a separate module
  - They know how to create data models
  - Encourage them to wire up the most basic scenario they can (no auth -- just create a user)
    - Remind them that this user model is Sequelize, but it's not built with the other API. Because it's a separate thing, have them build it as stock Sequelize model.
  - They should wait on the auth parts until signup is working right (Create a user and hash the password -- in Postgres)

## Past bugs, issues or surprises...

## General Comments and Notes

There's no way around it, this first day of auth requires a lot of code to get through, and the topic is large enough to warrant a full hour+ of pure lecture about the core concepts surrounding authentication, passwords, security, etc.  Students will struggle with all of it ... but typically, they also come up with lots of ah-ha moments and great clarifying questions ('So, is that why they want to verify with a pin over the phone?')

While we can make mention of the API server that was built in the previous module, this module is all about authentication (we're going to marry the 2 servers as the Capstone for this week), so beginning with this demo, work in a server that essentially only does authentication.  It'll have a couple of test routes in it, but nothing of consequence.
