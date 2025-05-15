# Facilitators Guide: Bearer Authorization

## Overview

On the 2nd lab of the big Authentication server build, the students will be utilizing the JWT Tokens they've been giving users on successful Basic Authentication and Bearer Authentication to re-authenticate their clients for subsequent server access.

### How does this topic fit?

**Where we've been**:
In the previous class, students implemented  Basic Authentication, focusing on the login process itself and simply making the statement that "After a login, this is what we need to send to the client for later" ... it's later.

**What are we focusing on today**:
Today, we will start to make tactical use of the JWT Tokens. The servers will now be augmented with the ability to not only serve a token on a good login, but to accept it as a form of authentication on subsequent requests. We'll be building this out as a 3rd middleware module in the server, so that as developers, we can make decisions as to which type of authentication is appropriate for each route.

**Where we're headed**:
In the next lab, we'll be implementing Authorization through ACLs (Access Control Lists) by adding more data to the JWT. Specifically, we will be assigning each user in our system a **role**, and each role a **set of capabilities**. Once this is in place, we can get more granular with our controls. A route can now say not only must you be an authenticated user, but you must also have the appropriate permissions to access this resource.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Read up on JWTs, specifically the [jsonwebtoken node module](https://www.npmjs.com/package/jsonwebtoken) that we're wiring up for this assignment.
- Practice the demo on building out Bearer Authentication

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- This will be the first time many students will have used the `Authorization` header.
- There is a lot of moving pieces to auth,  let the students lead you through their solutions.
- Focus on each of the layers of your application and what their responsibilies are:
  - Middleware
  - Routes / Router
  - Models / lifeCycle methods.

### TOPIC 1: Bearer Authentication

- **Why** (5 min)
  - Once a user logs in once, we don't want to keep making give a login/password on every page
  - How should we best handle every subsequent request to our server/API?
  - As a user, you want to login and have the system remember you
  - As a client application (like pulling from an API), you don't want to keep re-authenticating
  - We both want security & speed of the process itself
- **What** (10 min)
  - Bearer Authentication
  - After we login with Basic or OAuth, we give our user a "Token"
  - Our server can put data into the token
  - If the user presents this token on subsequent requests, we can decode it, see the data within, validate that they are a valid and "logged in" user
  - Server can then grant or deny access based on the validity of the token and the user
- **How** (30 min)
  - Live Code the [demo](DEMO.md)
  - As you code the demo, focus on both the mechanics of this ...
    - It's middleware that you can put on any route to "authenticate" it
- **Experimentation and Discovery Ideas**
  - Dig into the JWT tokens and standards
    - Transference of data back to the browser
    - Are these secure?
    - What can you/should you store?
      - Reference ID to lookup session data?
    - How else can we "tighten up" the system?
      - Is giving a token that works forever and ever really a good thing?
        - Isn't that what our 301 API keys do? Is this ok?
      - Solicit ideas from the class.
        - Timeouts (valid for 15 minutes)
        - Single Use Only
        - 2 Factor

### Demo

For [demo](DEMO.md), continue to build on the simple server you've been working on throughout the module. Although there's no database behind it, the core functionality is what we're interested in demonstrating. Getting this to work "end to end" gives the students a process to see and follow in their own servers.

It's important to end with the students seeing that they can use **Basic Auth Middleware** to validate the `/signin` route, and the **Bearer Auth Middleware** to protect any other route that requires a valid user, using only the token.

## Lab Notes

- Lab will have the students taking the JWT implementation from lecture a step further in terms of security, timeout, etc.
- The core implementation is there, and works once the debugging portion is complete.  However, the way we're doing the tokens isn't terribly secure or stable. This lab presents the students with a couple of idea for ways to tighten the system up.
- Encourage them to explore and ideate further... 2 Factor, Secret+Token, etc.

## What might students struggle with today?

getting the lab wired up and debugging takes some effort.  Reference this [bug list](../solution/#bug-list) as needed.   

### Success tactics:

- Have a working linter
- Wire up postgres
- Run the app and hit routes from beginning to end
- Read error messages and find the locations in codebase to debug
- Tests can be run one at a time.

## Past bugs, issues or surprises...

## General Comments and Notes
