# Facilitators Guide: Redux - Additional Topics

## Overview

In this final class in the Redux series, we'll be very lightly introducing the students to Redux Toolkit -- a new store pattern that makes managing a store a bit easier. This is mean to be more informative than tactical.

This is also a great day to experiment with Redux patterns, showcase ways you've used Redux in your own applications and expose students to other ways to not only model their reducers, but in ways that companies use to wire things. Tinkering around and code-reviewing alternate patterns can get the students talking, evaluating, and 'compiling' on the fly. All good things.

### How does this topic fit?

**Where we've been**:
In the previous class we covered asynchronous actions by introducing "Thunk" middleware. At this point, the students will have been exposed to (but certainly will not have mastered) basic Redux store creation, managing multiple reducers, and handling API calls within an action.

**What are we focusing on today**:
Today, will largely be focused on review, level setting, and smoothing out the Redux process. Will be showing them a new Redux store pattern  -- Redux Toolkit (RTK) that attempt to add structure and rules to Redux applications.

**Where we're headed**:
This marks the end of the Redux module. Students will be moving on in the course to other topics.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to recap Redux, React, and any other lingering points of concern for the students. They will see some new things today, but their implementation is purely a stretch goal. Goal #1 is to ground the student's knowledge of React, Context, and Redux

## Preparation

- Read up on Redux Toolkit
- For fun, read about Saga and MobX, although we're not going to be demonstrating them, it's good to discuss it as an alternative
- Get ready for questions surrounding the "WHY" of all of this.
  - Why so many ways to manage state?
  - Why so many patterns in Redux
  - What's the best way to do this?
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice redux toolkit demo (redux) that shows alternate ways to manage a redux store

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

Code review could be long today. In fact, if the entire day is a series of reviews, demos, build, and other activities surrounding building a Redux based application, embrace it.

- More important than getting into Redux Toolkit is getting the students confident with Redux as they already know it.
- Prepare with multiple demos and be ready to fix all manner of broken attempts at the e-commerce site
- It might make sense for you to rebuild from scratch a new Redux app to re-demonstrate the core concepts.

### TOPIC 1: Store Patterns  - React Toolkit (RTK)

- **Why** (5 min)
  - Redux requires a lot of boilerplate
  - Every Redux application "looks different" even though all of the same parts are there
  - There are no standards around file or folder names, reducer modeling, etc
    - Dan Abramov (creator of redux) even calls this out
      - *show the annoyance driven development image in `assets/add.png`*
  - As a result while widely adopted by the community, Redux is often excoriated for being overly complex and heavy to implement, especially for new developers.
- **What** (10 min)
  - There are numerous add-ons for Redux
    - [Redux Ecosystem](https://redux.js.org/introduction/ecosystem)
    - e.g.
      - [Saga](https://redux-saga.js.org/), which allows you to chain actions and handle Async easier
      - [Sockets](https://github.com/itaylor/redux-socket.io) to wire live events into your reducers
  - There are numerous competitors to Redux
    - [MobX](https://mobx.js.org)
    - GraphQL / Apollo
    - [HookState](https://hookstate.js.org/)
  - But Redux is a force and in wide use ... so there are a few efforts to unify development and create consistent patterns to make it easy to adopt
    - **Redux Toolkit**
      - Integrated into Redux itself, this new framework makes managing a store much simpler
        - Uses the single file pattern
        - Provides some wrapper functionality and object rules around the reducers/action
        - Pre-includes all of the basics in the store for you
          - Redux Dev Tools, Thunk, performance middleware
- **How** (30 min)
  - Operate a demo that showcases the same basic component type (a list with an action) 3 ways
- **Experimentation and Discovery Ideas**
  - Question/Discussion with the students:
    - **If you were starting from scratch, how would YOU create a global state manager?**

## Lab Notes

- This lab is a polish project -- finishing out the Redux application with full fidelity
- Stretch goals are to replace the hand written store with Redux Toolkit
  - Encourage the students to hit that. It's a great way to really get back into how things work
  - Moving between different types of code that do the same thing is a great way to stack learn

## What might students struggle with today?

## Past bugs, issues or surprises...

## General Comments and Notes
