# Facilitators Guide: `useState()` Hook

## Overview

State management in function components using the `useState()` hook vs a Class component with a more holistic `this.setState()`

### How does this topic fit?

**Where we've been**:
Students have worked with state in class components in previous courses. They've worked with functional components in the previous lab, but not with state

**What are we focusing on today**:
Today, we'll be diving into Hooks, principally focusing on `useState()` to provide the ability for functional components to manage their own state. We'll additionally begin writing some rudimentary tests

**Where we're headed**:
In the next class, we'll be introducing the `useReducer()` hook to manage state when it changes conditionally

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to understand more deeply the differences between Class and Function components, the component lifecycle and using state in function components. A basic understanding of how to use the Hooks API is an important takeaway, as we'll be using them frequently throughout all subsequent modules.

## Preparation

- Read up on the basic hooks use cases
  - `useState()` for state
- Get ready for questions regarding when you'd choose a Class or a Function component and how the lifecycle of a React component actually works
- Practice with React Testing Library as we'll be writing some basic tests for the first time
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the hooks demo
  - Be ready to dive into pros/cons/differences between functional vs class components

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

Following the previous class, the students should have a pretty good sense of moving between function and class components. It might be a good idea to give them a quick conversion exercise to remind them of the concepts.

### TOPIC 1: State and Function Components

- **Why** (5 min)
  - To this point, state has only ever lived in Class components
  - It's hard for React to manage the Virtual DOM
    - Needs to maintain state between renders, so class instances make that possible for React internally
  - But it can be frustrating for developers
    - You have to anticipate a need for state and build either a Class or a Function component
    - Classes are cool, but not terribly efficient, nor are they inherently re-usable like a plain function
- **What** (10 min)
  - Internally, React uses an API to manage all of this, which is now well documented and exposed
  - As developers, we can now "hook into" the subsystems of React and make use of things like state management and lifecycles in any component.
  - There are many "hooks" ... first, we will examine the state hook
  - `useState()` manages state in a function component
  - This API allows a function component to declare any number of "state variables" and a function to change them.
  - Of Note:
    - Whenever a variable declared by the state hook changes, the component will re-render
    - The variables can be of any type (string, array, obj, bool)
    - You can have as many variables as you like in a component
    - Functional state is not shared.
      - The same functional component, rendered multiple times -- each has esoteric state.
- **How** (30 min)
  - It's a small syntax adjustment for us to make, but it opens us up to more tactically sized components
  - Execute a quick demo that showcases the basic syntax during lecture
    1. Require the hooks api
       - `import React, {useState} from 'react'`;
    1. In a function component, declare your state variable and a `setState()` equivalent and initialize (in one line!)
       - `const [myAge, setMyAge] = useState(25);`
    1. Render state directly as you please, within the return of the function
       - `<div>You are {myAge} years old</div>`
    1. Within your component, change the state as needed
       - `setMyAge(myAge+1)`
       - When the state changer function is called, this triggers the component to re-render
- **Demo** (30 min)
  - Execute a more in-depth demo (the counter) that uses state to manage something that survives a render
- **Experimentation and Discovery Ideas**

### TOPIC 2: React Testing

- **Why** (5 min)
  - We want to have confidence that our code works as expected
- **What** (10 min)
  - React Testing Library
  - Acceptance Level Testing (no units)
  - Test your app just as a user would use it, not as a developer looking for each function to be perfect
    - "When type in this field, this other thing should change"
    - "When I click this button, that word should change"
    - "When I submit this form, I expect to see some specific data"
  - This amounts to a wiring test
- **How** (30 min)
  - You'll need to "render" your app's main component
  - Give your markup `data-testid` or use static test or aria roles to query the DOM and find your DOM elements to use as input or assert output
  - Fire events where needed
  - Assert that the output has changed
- **Experimentation and Discovery Ideas**

## Lab Notes

- State conversion from class to function should be relatively straightforward
- Make sure that they understand the value in the smaller "bites" of state that this wants you to use
- Testing will be very strange for them for a while
- Encourage them to write fewer tests that exercise more of their app.
- Using the GitHub action, all tests can be run at GitHub as well, following check-ins

## What might students struggle with today?

Keep an eye on MSW.  In a previous bug a class experienced a large amount of issues using MSW to capture requests. Using any third party library such as axios and superagent threw network errors in the test environment. Using fetch worked sometimes, but still threw very cryptic errors regarding internal MSW functionality.

## Past bugs, issues or surprises...

## General Comments and Notes
