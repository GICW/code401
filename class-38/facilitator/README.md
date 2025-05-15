# Facilitators Guide: Redux - Asynchronous Actions

## Overview

TConnecting a Redux application to a backend service (i.e. an API) requires a bit of additional work, as asynchronous actions can cause issues with the internal Redux store management mechanisms. Today, we will be exploring Redux middleware, specifically "Thunk" which provides the mechanism to work asynchronously with Redux

### How does this topic fit?

**Where we've been**:
In the previous class we wired up multiple reducers to split the management of our application state into separate logical stores.

**What are we focusing on today**:
Today, we'll be connecting each of those to the server, using API calls, implemented with a slightly different action pattern, as required by Thunk middleware. Note that a big part of the discussion today will revolve not so much around how to save data to the server (it's just API calls, after all), but rather, **when**.

**Where we're headed**:
In the next class, we'll be adding some additional fidelity to the application. Rather than introduce a new concept, we'll be leaning into the base Redux concepts and constructs, and assembling a more robust application.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to not only get asynchronous calls to the server properly wired in, but to have some meaningful discussions and understanding around the topic of "truth" as it relates to state. When you engage a remote system, how much do you rely on that vs the front-end state, and how do you keep them in sync?

## Preparation

- Read Up on [Thunk Middleware](https://alligator.io/redux/redux-thunk/) and async issues with Redux applications
- Get ready for questions about why async is so difficult in Redux
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the demo on using thunk and asynchronous actions (async0)

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Following the lab on combining multiple reducers, students might have run into issues with getting 2 reducers to hear the same action properly
- Mixing up state is very common. With multiple reducers in the store, components need to know where they're pulling state and what actions they can run.
- This can be really confusing at the early stages for students, so help them to see the connections with pictures, mapping diagrams, and stepping through the solutions.

### TOPIC 1 - Thunk!

- **Why** (10 min)
  - Data is generally only interesting when it's live
    - We want to retrieve real data from a trusted, reliable source for our application
    - We also want to save it back to the server when things change
  - We've done this many times with `superagent`, `fetch`, `axios`, etc
  - But Redux doesn't make this easy
  - And we need to have some real conversations about "when" we save/fetch data
- **What** (20 min)
  - Actions must be objects, period.
  - Action Creators therefore must return objects.
  - But ... in the real world, we do asynchronous things like talk to servers
  - Enter "thunk", which lets our action creators return a function instead of an object.
    - Thunk Middleware executes that function THEN dispatches the actual action, which returns that object.
- **How** (60 min)
  - We will demo how thunk works first by writing it
  - The demo includes a full breakdown of how async actions work with and without thunking.
    - Basically, try to make an API in an action. Witness the failure
    - Add thunk middleware. Savor the Win.
- **Experimentation and Discovery Ideas** (30 min)
  - The code here isn't terribly complex. Once you add the "real" thunk as a dependency, it's really a matter of creating the action properly.
  - Once demo is completed and the theory understood, engage the students in a conversation about data access in a client side application
  - These conversations are very important with regards to data integrity, scale, and user experience (you'd want to know when a product is out of stock in real time!)
    - When do we get the initial data from the server?
    - How do we stay in sync with the server?
      - Things will change very often on the server that we didn't change
      - How are we alerted? (hint: Sockets!)
      - How often do we re-fetch?
      - How do we do this efficiently?

## Lab Notes

The code requirements for this lab are relatively light, as students will be working with the same set of requirements as from their previous lab, with the added functionality of using live data. This should give them an opportunity to complete all requirements and add some fidelity to the design.

- The big job for this lab will be to reconnect the application to the live API server, using Redux async actions via Thunk
- The main struggle will be in them getting their API server deployed, operational, and ready for requests from the front end.
- **Pro Tip** Use the "real" thunk in production code, not the one we demo with (it's well tested and more robust)

## What might students struggle with today?

- The "Why" ... this seems overly complicated and unnecessary.  Lots of things in Redux will cause that initial reaction, but get the students to see the value in working within the confines of an API

## Past bugs, issues or surprises...

-

## General Comments and Notes

- There are other ways to handle Async in Redux, keep the students focused here, and allow them to explore things like Saga during their projects
