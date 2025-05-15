# Facilitators Guide: API Integration

## Overview

The culmination of the Hooks and Context module, in this class, we'll be integrating an API and Authentication server into the application.

### How does this topic fit?

**Where we've been**:
Students will have scaffolded and styled a complete To Do application, including a mock login and authorization system.

**What are we focusing on today**:
Today, we'll have the students deploy an authentication server and data API of their own and connecting it to their To Do application

**Where we're headed**:
This concludes the module on using Context and Hooks. The next module will introduce Redux, which is another way to manage global state. Redux is a specialist in managing complex application data.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Today, we'll be combining all aspects of Hooks and Context into some real world use cases. The Login/Auth components built in this lab would be an ideal candidate for the students to publish to NPM and use in any future project.

## Preparation

- Revisit the Authenticated API server built in the earlier modules. We'll be needing this for building out these components.
- Deploy your version of it.
  - Or ... use the [official deployed API server](https://api-js401.herokuapp.com) to login and get tokens to use with these components
    - Admin Access: Username: admin, Password: ADMIN
    - Editor Access: Username: editor, Password: EDITOR
    - Guest Access: Username: user, Password: USER

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Following the first day of Context, students will likely have struggled with wiring
- As with all things React, there are many files at play and many dependencies to manage
- Code review for the previous lab should start with a visual -- draw an architecture diagram, map out the component tree and how they work with the state/methods from context
- Once you have solid foundation reset ... visit some broken code!

### TOPIC 1: Login and Auth Review (Server)

- **Why** (5 min)
  - Revisit our previously built Authenticated API server
  - Ensure that we remember how it works
  - Ensure that we have it deployed and usable
  - Revisit the routes and functionality so that we can leverage it in the app
  - In this class, we'll be writing an amazing React front-end that leverages it
- **What** (15 min)
  - Do a code review of the Authenticated API server built in previous modules
    - *found in the project folder for this modeule*
  - POST `/signup` to create users
    - Expects a JSON object with `username`, `password`, and `role` fields
  - POST `/signin` with Basic Authentication
    - Returns a JWT (Token) that contains the username, id, and an array of permissions
  - GET `/oauth` can handle the OAuth handshake process, if there's one configured
    - This should have a corresponding web page with a link that triggers the process
  - Every in the api server can be protected for access by using 2 pieces of middleware
    - `Context/Auth` will check the token and continue along if the user is valid
    - `can('delete')` will check the user to see if they have the identified capability
  - Once you've reviewed the code and executed some local test runs with the above assertions...
  - Do a deployment and re-test in the cloud
- **How** (40 min)
  - Pair up the students and have them dig up their API servers and deploy them as a group
  - Run this as a workshop
    - When On-Site it can work well to have a student plugin to the big screen and drive with the others. Build in time to the workshop to recap paired learnings for the entire group.
    - When Remote utilize Zoom breakout rooms and have one student share and drive with the others.  Allow time for remote learners to come back to the group after pairing and report on their findings and interactions to the entire group.

### Interactive Demo (60 Minutes)

- Workshop and Code Review of the Auth/Data APIs

## Lab Notes

## What might students struggle with today?

- Getting their old API and Auth servers working again
- Remembering how the API and Auth systems work

## Past bugs, issues or surprises...

## General Comments and Notes
