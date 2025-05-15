# Facilitators Guide: Redux - Combined Reducers

## Overview

Redux excels at managing complex state objects in the store. We've already set up students with the syntax for using combined reducers, but without explaining it. Today, we'll get into the specifics of not only how to set it up from a syntax perspective, but also getting into some use cases that will make this pattern more obvious.

### How does this topic fit?

**Where we've been**:
In the previous class, we introduced Redux. Students created a simple storefront with a Redux store that required them to dispatch a single action to make a simple state change.

**What are we focusing on today**:
Today, we'll be introducing the concept of multiple reducers. Students will be spreading their current store into 2 reducers and adding a third. The core concept of this class will center around modeling state and using multiple reducers to separate concerns.

**Where we're headed**:
In the next class, we'll be hooking this application up to a live API using Thunk middleware, and making a full end-to-end working application. To close out the module, we'll be layering on some additional UI and UX as well as to look at some alternative Redux store implementations

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to conceptualize and architect a larger scale application using a Redux store with multiple reducers. The code for this is minimal ... the focus needs to be in wider thinking around modeling, and understanding connections between many components and the store.

## Preparation

- Read up on the latest patterns for combining reducers and shared actions
- Get ready for questions about wiring and architecture. Redux brings with it a lot of boilerplate and new connections for students to digest.
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the demo on complex reducers (combined-reducers).

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Following the first day of Redux, you can expect quite a bit of confusion, especially in the wiring.
- Focus your code review on knowing WHERE state is coming from in the component, and HOW you're getting the right code in the `switch` statement in the reducers to run.
- It definitely takes some time to break this down and draw connections between the seemingly disconnected code
- Expect a full hour of code review to really lock in the learning objectives for basic Redux

### TOPIC 1 - Combining Reducers

To frame the discussion, imagine state like this, with 3 separate "parts"

```javascript
let initialState = {
  people: [ {}, {} ],
  places: [ {}, {} ],
  things: [ {}, {} ]
}
```

- **Why** (5 min)
  - Managing state as an object with keyed "sections" or "sub-sections" is painful
  - As it gets more complex, you run risk of side effects and very complicated updates to specific parts
  - The reducer gets bloated and harder to manage
  - The actions become intertwined and complicated to manage
- **What** (15 min)
  - What would be easier to understand, manage (and scale) is to keep each bit of state separate
  - In our example above, we'd like to have a separate reducer, action set, and state for each of
    - people, places, and things
  - Redux provides a facility to do this: `combineReducers`
    - Each bit of state can be declared and managed separately (separate store modules)
    - Components can use any one or all of the stores
    - Separated reducers have their own actions and data management (and modeling) cycles
    - Note, however, that actions are like events.
      - If 2 or more reducers take action on the same action type, both reducers will execute
      - You can be intentional about this (you might want 2 different reducers to see the "EMPTY" action type)
      - You should also beware of this (you may not want an action type called "SAVE" that could potentially fire every reducer in your store)
- **How** (45-90 min)
  - Model your data in a way that makes sense for single reducers to handle a single part of state
  - Name your action types in such a way as to be "tied" to their reducer, or open for multiple use
    - i.e. PEOPLE_ADD or RESET
  - Perform an interactive demo that showcases using multiple reducers in a more complex application
    - The syntax for combining reducers is light
    - The concepts above are large
    - Take extra time as you code out the demo for the students to lean into the new thought patterns
      - State Modeling
      - Application Architecture
      - State visibility
      - Scale
- **Experimentation and Discovery Ideas**
  - It's a good idea to draw a set of screens that showcase what your demo will be before you start coding
  - Break the class into groups and have them strategize on the state models, actions required, etc
  - Then, as a group, finalize YOUR plan for the demo and execute that plan, in real time
    - You should be able to gently lead the class in the direction your demo was going to go anyway

## Lab Notes

- For lab, students will be creating a total of 3 reducers
- They will be sharing a few actions between them as well
- Yes -- this is meant to be complicated. We want the students to struggle a bit with multiple connections, a more spread out architecture, and thinking about the sharing of state and actions
- Encourage them to seek out examples and to work together.
- Starting with UML or an architectural plan is critical

## What might students struggle with today?

- Connections, Wiring
- "How does dispatching an action run the action creator function and then make the reducer do anything??"

## Past bugs, issues or surprises...

## General Comments and Notes
