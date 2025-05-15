# Facilitators Guide: Context API - Behaviors

## Overview

The Context API can do more than just provide state to components ... it can provide methods that allow any component to change it's state. This gives application developers a new ability to manipulate state a higher (common) level from anywhere in the application

### How does this topic fit?

**Where we've been**:
Students will have refactored an application that provided state "the old way" into one that now uses Context to store and provide state at a higher level, global and accessible to all components

**What are we focusing on today**:
Today, we'll be augmenting our application context to allow the application to also provide components with the methods that change it's internal state.

**Where we're headed**:
In the next class, we'll be using Context and global state to solve a real world problem, which is to manage the logged-in status and access permissions for a user.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> In addition to focusing on the "How" of implementing global state with the Context API, **we want to have a real discussion of when it's appropriate to have/provide global state** such as this. There's a difference between being lazy (and just storing todo items at the highest level) and thinking broadly and using Context for actual application context such as theme, dark mode, login, broadcasting events, etc.

## Preparation

- Read up on context ... specifically the various ways to consume it in Class and Function components.
- Get ready for questions about what to use global state for, what to provide/expose
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the context demo and understand/focus on the build order

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Implementing context 3 ways will have been a lot for the students
- Make sure and code review each of them separately and talk through the pros and cons
  - Specifically, when you would/should use a function, class, multiple contexts, etc

### TOPIC 1: Manipulating Global State

- **Why** (10 min)
  - We have the concept of global state being available to any component in the app
  - But ... we don't yet have a way to manage state at the "Application" or "Global" level
- **What** (20 min)
  - Context is nothing more than a component, but with some extra functionality from React
  - It can have state, as we have seen
  - It can also manage it's state
    - `useState()` for function components
    - `this.setState()` for classes
  - It can run effects to watch for state changes or run on startup
- **How**
  - The same mechanism (the `values` prop that we publish via the Provider)
  - Whatever object you put in `values` can have both state and method references
  - In this way, we can simply make any method we want available to all components, not just state itself
- **Experimentation and Discovery Ideas**
  - A good way to draw this out is with a cloud at the top of your drawing
    - The cloud has both state variables and state altering methods
    - Beneath, components are drawn
    - Instead of a top-down approach any component "under" the cloud can ask it for state or methods (draw the arrows in both directions)

## Lab Notes

In this lab, students will be reading from and writing to Local Storage in their context. They will need to keep the state that they're sharing in context the same, but update those values after they read from Local Storage.

To save settings, their Context will need to provide a method, which will be called by the form component after the user changes their settings. This will be the first time that a component will be able to run an external function that was not passed to it through a prop. This will be a mind bender for the students!

## What might students struggle with today?

- A 3rd way to handle state.
- Running context methods that were never "passed down" like they've seen before

## Past bugs, issues or surprises...

If using Mantine `NumberInput` component and the custom `useForm()` hook students may run into trouble. the `NumberInput` component has its own `onChange` method that passes a value by default instead of an event. See today's solution code for one possible Mantine-based solution.  

Note:   No form element is used. Instead each input is updated on change, then a Button onClick is used to save already-updated context settings to local storage and show those settings in the `Card` to the right of the "form" `Card`

## General Comments and Notes

Today's demo code shows different opportunities to interact with Mantine Component Library
