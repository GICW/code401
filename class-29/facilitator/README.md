# Facilitators Guide: Advanced State with Reducers

## Overview

Managing complex state is why Redux was created, but that's not necessarily going to be a part of every application. In fact, you may not want global state. But the redux reducer pattern is very powerful, and could be useful to manage complex state within a component. Enter the `useReducer()` state hook for functional components. It's essentially the redux pattern, but at the component level.

### How does this topic fit?

**Where we've been**:
Students will have been exposed to managing state in a function component with `useState()` and managing the lifecycle with `useEffect()`

**What are we focusing on today**:
Today, we'll be managing more complex state using the `useReducer()` hook

**Where we're headed**:
This completes the module on Function Components. In the next module, we will be looking at Context

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to understand more deeply the differences between Class and Function components, the component lifecycle and using state in function components. A basic understanding of how to use the Hooks API is an important takeaway, as we'll be using them frequently throughout all subsequent modules.

## Preparation

- Practice and read on the `useReducer()` hook and the reducer pattern in general
- Re-familiarize yourself with Redux, as this serves as a building block for the redux pattern
- Look at previous course student submissions for insight as to what you might see in code review.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Students will still be confused about testing.
- The effect hook dependencies issue may have arisen for some students. Use this session to cover how to account for dependencies in `useEffect` by maybe bringing in `useCallback()` or `useMemo()`

### TOPIC 1: The `useReducer()` Hook

- **Why** (5 min)
  - State can get complex, even in a single component
  - Once you're managing 3 or 4 separate `useSate()` hooks, it gets complex
    - ... especially if you update more than one in response to the same user action
    - this can cause multiple non-sequential renders
  - More advanced react applications use Redux to manage global state
  - `useReducer()` uses the same pattern on a component level, so there's a good 1:1 mental map we can make
- **What** (10 min)
  - `useReducer()` dispatches an action (type + payload) to a reducer function that returns the next state
  - State in this case can be a complex object
  - You can manipulate multiple parts of state with one action (dispatch) so you don't get multiple renders
- **How** (30 min)
  - Declare an initial state
  - Create a reducer function that accepts state and an action as arguments
    - It should use a `switch/case` to conditionally alter state based on the `type` of action to perform
    - If given payload, that case should alter the state with it and return the next state
    - State should be considered immutable
  - Actions are plain objects with a type and some data (payload)
    - This `type` property should match a `case` in the reducer
    - The `payload` property is also given to that case in the reducer
  - Components can call for a state change by **dispatching an action**
  - Once the reducer runs, state is changed, and the component will do a single re-render
- **Experimentation and Discovery Ideas**

## Lab Notes

- Students will be implementing a large new feature and a new way to manage state today
- This is a tall order, but they should be starting from a stable point.
- Focus with them on the order in which to attack the lab. Refactor to `useReducer()` first, then add new features

## What might students struggle with today?

- Understanding the reducer pattern. It's big and feels disconnected
- Adding on the history, and using local storage will be a large task

## Past bugs, issues or surprises...


## General Comments and Notes

- Brandon Mizutani: Highly recommend reminding students that you must incorporate a mock request object within the App.jsx (in the useEffect) in order to see your History data render. Because of the blocked CORS policy issue, there was trouble rendering the data.
