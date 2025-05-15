# Facilitators Guide: React Recap

## Overview

In this class, we will be re-visiting React, and with it a discussion about functional components. In this first class of the module, the primary goal is to get the reacquaint the students with React by building out a simple class based component and beginning their transition to using functional components. This will give us the opportunity to "dive in" to how React works under the hood and have some discussions about how Classes and Functions differ. SASS is also introduced.

### How does this topic fit?

**Where we've been**:
This is the first class in React in this course. Students will have had React exposure in a previous course or as pre-work for this course, but only with basic, class based components including some CSS.

**What are we focusing on today**:
Today, Students will encounter the React rendering cycle, props (both data and function), as well as their first "hook", all through the lens of function components and use some basic SASS to style their application.

**Where we're headed**:
In the next class, we will introduce the `useState()` hook for function components and have the students doing conversions.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Its React time, so get yourself comfortable in the ecosystem.
  - Point out the [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/), a commonly used style guide that we will use to deliver consistent starter code, demos, and code reviews throughout the course.
- Students will really struggle on how things fit, what calls what, and how the magic works.
  - Make sure that your demos and coding style leaves room for the rabbit holes, questions, and confusion that will arise.
- You'll be doing a history lesson style demo today, building the same simple demo 3x to show progressively better development
  - Practice the React demo (react) and writing custom hooks

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- No code review today, this is is the first day of a new content cycle.

### Topic 1: React and Component Based UI

- **Why** (5 min)
  - Atomic Development
  - Application -> Component -> Element ... all married to state
  - Separating data from display (even in the same app/component)
- **What** (10 min)
  - React (and Angular and Vue) are "Component Based Libraries"
  - They take care of binding data (state) to The DOM
    - React uses a Virtual DOM to do so, re-rendering things when data changes
  - As a developer, we get many advantages
    - Separation of Concerns
    - Reusable parts
- **How** (30 min)
  - Discussion: Library vs Framework
  - Discussion: Component Driven Design
    - Whiteboard a counter application
      - Simplistic "UML" -- boxes and lines to connect the parts that you discover
    - What parts do we see?
    - Which of those might care about what the state is?
    - Which of those might want to change it?
      - Do they need to know the current state?
- **Experimentation and Discovery Ideas**
  - Discussions can arise about Modularity, Connections between components
  - During this part of lecture, solidify your statements while coding out the **Class Component Demo**

### Topic 2: React Function Components

- **Why** (5 min)
  - Functions are more efficient within the Javascript compiler than Classes
    - There's no instantiation and memory waste, they just "run on render"
  - Function components require less wiring
- **What** (10 min)
  - A function component renders what it returns
    - (Classes render what the `render()` method returns when called)
  - A function component still has a lifecycle
    - Pre and Post render/mount
  - Function components can "hook into" the react state and rendering cycles
    - Hooks are small bits of logic that get `used` as components render
    - Simple ways to write re-usable code
    - NOTE: Don't go overly deep on this concept.
      - Focus on the `use` and reusability aspect
      - As we go forward, we'll use hooks for almost everything, so the nature of hooks will grow organically as you continue the course
- **How** (30 min)
  - Live Demo
- **Experimentation and Discovery Ideas**
  - During this part of lecture, solidify your statements while coding out the **Function Component Demo**

## Lab Notes

This first React Lab is purely focused on getting the students re-acquainted and confident in the react coding environment.

You can't stress enough that there's a **development server** running that's helping them things in the browser, but in reality, React actually produces static files, just like we did in 201

- index.html
- app.js
- style.css

## What changed from the previous class?

- As this is the first day re-visiting React, there's nothing carrying over other than their knowledge from prior courses. Reinforce what they know, and start to pull the knowledge out of them as you build.

## What might students struggle with today?

- Understanding the 1:1 conceptual mappings between Class and Function components

## Past bugs, issues or surprises

- installing `node-sass` has proven problematic for some machines.  `npm install sass` appears to be more dependable

## General Comments and Notes
