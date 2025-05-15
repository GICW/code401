# Facilitators Guide: AWS: API, Dynamo and Lambda

## Overview

Create a fully functioning REST API using only cloud resources

- AWS Gateway
- Lambda Functions
- Dynamo DB

### How does this topic fit?

**Where we've been**:
In the previous class students were introduced to Lambda functions and S3 buckets, writing some basic function code in Javascript to respond to a triggered event from an S3 upload.

**What are we focusing on today**:
Today, we'll be expanding on the concept of serverless functions and building out a REST API that uses only AWS Services as their architecture

**Where we're headed**:
Next class will focus on AWS Event Management using SQS and SNS

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to provide students with a true comparison between the servers they hand built, and how that same paradigm is architected in the cloud, at scale.

## Preparation

Practice the demos a few times. As with all AWS demos and lectures, the majority of your time and focus must be on getting around the AWS ecosystem and being comfortable with their services, logging, documentation and quirks.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../LECTURE-NOTES.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Re-Review lambda wiring, but don't focus too intently on that. You're going to wire up 2 more functions with today's demo, so there's  plenty of opportunity to revisit the rough spots.
- Definitely cover auto-deploying from GitHub actions if time allows. Its doubtful students will have gotten that far, and getting that wired in is a huge time saver
- Remind students that AWS services are not free. As we demo each class in this series, remind students to delete the services they created following receiving their grades.

### TOPIC 1: API Gateway

- **Why** (5 min)
  - APIs are the primary way we integrate with a database.
  - They connect users to data, using code
- **What** (10 min)
  - We want code to run when a route is hit, just like express
  - However, we are serverless, so there's no `app.get('/route', handler)`
  - API gateway at AWS allows you to define the routes and methods separate from the code
  - Once you define the routes, you then connect or integrate them with code
  - Rather than a monolithic server that has everything we need in it, serverless architecture works like this:
    - API Routes are defined with methods and which lambda code to run when the route is "hit"
    - When a route is "hit", AWS composes an event context and fires an event with that as payload
    - The AWS arbiter sees the event, identifies the function that was connected and opens an instance of the function, sending it the event context
    - The function runs, returns its output to the arbiter, which returns it to the API
    - Finally, the user gets their data response
  - Seems like a lot of complexity for something seemingly simple. After all, we did this in Express
  - Remember our conversation about CDNs, Auto-Scaling, and Cloud performance?
    - Complexity is sometimes the price we pay for high performance and a lower cost per hour
- **How** (45 min)
  - Demo the creation of API Gateway routes and connecting them to functions
  - Demo 1: create can be a route that calls your `add` function from the previous class demo, just to show the steps
  - Do a full demo (demo 2), creating a fake CRUD series to matching lambda functions

### TOPIC 2: Cloud Databases

- **Why** (5 min)
  - Where the cloud and horizontal scalability really shines is with databases
- **What** (10 min)
  - AWS has many databases that mimic what we've used in our coursework
    - RDS is a postgres compatible database
    - Dynamo is a mongo-like database
    - DocumentDB is a MongoDB compatible database
    - ElastiCache, is a key-value memory cache
  - We're going to dive into the native "Dynamo" solution both for cost and scale purposes
  - Dynamo and Dynamoose
    - Dynamo: NoSQL / Document Database
    - Dynamoose: API layer, like Mongoose or Sequelize that makes it easy to define schemas and work with the data without getting into the details
      - Handles connections, async querying, collation, etc.
- **How** (45 min)
  - Create a table at AWS and manually insert records.
    - Note the lack of structure (multiple records can have different shapes)
    - This is why we need a schema tool like Dynamoose
  - Complete Demo 2, wiring in Dynamo Database actions to your lambda functions
  - Notice how the API routes themselves don't really know or care how this works?

## Lab Notes

- This is a big lab with lots of wiring, but the problem domain is familiar
- Push them hard to really consider and document the differences between this build and their hand built API in Express

## What might students struggle with today?

- Getting around AWS

## Past bugs, issues or surprises...

## General Comments and Notes
