# Facilitators Guide: Component Lifecycle / `useEffect()` Hook

## Overview

The `useEffect()` hook allows you to execute code during the entire lifecycle of a component, from the first rendering (mount) to it's un-mounting. Additionally, spying on variables for changes allows you to be even more reactive to change.

### How does this topic fit?

**Where we've been**:
Students will have been exposed to functional components and hooks with a very simple custom hook as well as the use of the `useState()` hook to add state management to a function component

**What are we focusing on today**:
Today, we'll be diving into the `useEffect()` hook to tap into the rendering lifestyle.

**Where we're headed**:
In the next class, we'll revisit state by introducing the `useReducer()` hook to control more advanced or deep state.  This will give them the vocabulary they need to grasp Redux, later in the course

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to understand more deeply the differences between Class and Function components, the component lifecycle and using state in function components. A basic understanding of how to use the Hooks API is an important takeaway, as we'll be using them frequently throughout all subsequent modules.

## Preparation

- Read up on the basic hooks use cases
  - `useEffect()` for lifecycle
- Look at previous course student submissions for insight as to what you might see in code review.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Students will likely have just run the api request directly in app when the form gets submitted.
  - Use this opportunity to show them how to do it with an effect that's watching for request variable changes (see the solution)
- Students will absolutely be confused about testing. Focus your code review time on testing a student's app, which will give you time to review React Testing Library as well as to fix their app/state issues

### TOPIC 1: Lifecycles and the Effect Hook

- **Why** (5 min)
  - Just as with Class components, functional components have a "Lifecycle"
  - We often want to run code right before our component renders
  - We might want to run code in response to particular state changes
- **What** (10 min)
  - `useEffect()` is a special hook that allows us to tap into the lifecycle of a function component
  - We can use it to run code before the component renders, on certain state changes, and even when the component Un-Mounts
- **How** (30 min)
  - The basic syntax
    - `useEffect( () => {} );`
    - The callback function will run on every render
  - "Watch" Dependencies
    - Given an array of dependencies, the effect hook will only run when the named pieces of state change
    - `useEffect( () => {}, [count] )` -- runs only if the `count` variable changes
    - `useEffect( () => {}, [] )` -- runs only on the initial rendering of the component (no state to watch)
  - Cleanup
    - If return a function from within the `useEffect()` callback, it will execute when the component Un-Mounts
    - `useEffect( () => { console.log('did work'); return () => { console.log('I happen on unmount'); }; } )`;
- **Experimentation and Discovery Ideas**
  - Have a preliminary discussion surrounding `useCallback()` and `useMemo()` and how you can use these to prevent renders when functions are dependencies.

### TOPIC 2: Deployment

- **Why** (5 min)
  - Need to see our code running live on the internet
- **What** (10 min)
  - Netlify
  - Amplify
  - GitHub
- **How** (30 min)
  - Netlify: Point to your repo at github
    - Must be lint-clean and error free
    - Students did this in 301
  - Amplify (AWS)
    - Create a new App
    - Connect your github repo and branch
    - It will recognize react and auto-deploy on every check-in
  - GitHub
    - You'll need a GitHub action (in the demo folder)

## Lab Notes

- Note that from today forward, all React applications must be deployed to be graded
- Try and get the students to see how they can use an effect to kick off the api request
- Tests should also be running at GitHub actions

## What might students struggle with today?

- Understanding state, in general, and what's causing things to render.

## Past bugs, issues or surprises...

## General Comments and Notes
