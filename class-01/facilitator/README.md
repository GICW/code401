# Facilitators Guide: Node Ecosystem

## Overview

This is the first day of 401 Advanced Javascript.

The first class is traditionally very long and is split evenly between introductions, course mechanics, and the actual coding content.

Be sure to spend as much time as needed today on getting the students fully onboard with how the class works, what your expectations are, etc. Setting them up for success early on is a key component to making this a great course.

From the coding side, we'll be focusing this first class on getting the students comfortable in the Node.js ecosystem, writing tests, creating basic documentation, using a 3rd party CI/CD service to run their tests, and setting the baseline standards for turning in a quality, grade-able assignment.

### How does this topic fit?

**Where we've been**:
Students will have had some light exposure from previous courses to ExpressJS and requiring external libraries

**What are we focusing on today**:
Javascript fundamentals and professional development patterns. In this class, we will be building our first simple Node.js library using Modules

**Where we're headed**:
In the next class, we'll start diving into the mechanics of Express and REST on a deeper level.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Make sure you have the latest version of node and nvm installed
- Read up on [Jest](https://jestjs.io/docs/en/getting-started), specifically [expect](https://jestjs.io/docs/en/expect) so that you can be prepared to answer questions about "what kinds of things can you test for?"
- Make sure that your JSDoc shortcuts/skills are up and that you can run the jsdoc command to generate documentation during your demo.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Code Review

- First day of the course. No Code Review

### TOPIC: Node, Modules, CI (~1 hour)

> Students have seen this at a surface level in 301 (light TDD, light Express).  Now, we will take a deeper look at what it means to be a professional developer and begin to create habits and adopt patterns that are used throughout the industry.

- **Why** (5 min)
  - Node.js Development Ecosystem
  - Professional development patterns and habits
  - Modules are important for code readability, reuse, scalability
- **What** (10 min)
  - What is Node?
    - Environment? Server? Compiler? Interpreter? Yes!
  - Where and how is Node used? Who uses it? Why?
  - Best Practices
    - Modular Programming (learn to break things down for reuse and testing)
    - Tested Application - Automated tests "guarantee" that your code works as expected
    - CI (Continuous Integration) - Your code is continuously integrated into the repo, and tested along the way. Failing tests can stop the process
    - CD (Continuous Deployment) - After a successful integration, your code is automatically deployed to the correct servers
- **How** (45 min)
  - DEMO - Write an express server that does the bare minimum, but demonstrates the above concepts
    - Draw UML to showcase how this application will work
    - Scaffold out a server to match
    - An External Module
    - A Test
    - Green at GitHub Actions (CI)
    - Deployed in the cloud (CD)
    - Create a well written README.md like the students should and "turn it in"

## Lab Notes

The lab will be to replicate the demo, exactly.

Provide the students with your demo code. Have them repeat your steps and turn in a fully deployed server, with running tests, and a properly written README.

## What might students struggle with today?

- A lot of firsts today ...
  - Node Module
  - Exports
  - Remote CI/CD

## Past bugs, issues or surprises...

## General Comments and Notes
