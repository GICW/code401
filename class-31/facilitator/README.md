# Facilitators Guide: Context API

## Overview

Our first look at global state in React will be in using the Context API. It will be a significant shift for the students in thinking about where state "is" and how they access it.

Many things, including BrowserRouter, Redux, and other components are built using Context, so it's good to get a lens into how they work under the hood.

### How does this topic fit?

**Where we've been**:
To this point, the students have had exposure only to uni-directional state and passing of state/methods down the component hierarchy. Additionally, they've had an introduction to managing state in function components using hooks, and the general concept of using hooks to handle shared state logic between components.

**What are we focusing on today**:
Today, we'll be introducing the Mantine design system (pronounced man-TEEN) as well as the larger topic of global state using the Context API, which has you declaring state at a high level and making it available to any component anywhere in the tree. Components will be able to "Opt In" to this global state, rather than having it passed down to them. This new tool can change how students view application architecture.

**Where we're headed**:
In the next class, we'll be using Context and global state to make global behaviors available to components

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> In addition to focusing on the "How" of implementing global state with the Context API, **we want to have a real discussion of when it's appropriate to have/provide global state** such as this. There's a difference between being lazy (and just storing todo items at the highest level) and thinking broadly and using Context for actual application context such as theme, dark mode, login, broadcasting events, etc.

## Preparation

- Read up on context ... specifically the various ways to consume it in Class and Function components.
- Get ready for questions about what to use global state for, what to provide/expose
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the context demo and understand/focus on the build order
  - It's a staged demo where you build it out, highlight flaws/notes, and then build out more as discussion points

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Students will definitely have had troubles getting an implementation of `useFetch()` or `useEvent()` to work properly as these patterns are not obvious without doing some research and example shopping (which they hopefully did)
- Spend time in the patterns, and perhaps assist a student with doing these tasks in a couple of ways to show students some options.
- You'll find (as with most things) that there are recommended patterns out there (and even your own) and students will have gone down many different roads. Go with them.

### TOPIC 1: Global State via Context

- **Why** (10 min)
  - We've got state in components, both class and function
  - We can pass state down through the tree
  - But ... we don't have a way to manage state at the "Application" or "Global" level yet
  - Why Global State?  Isn't that what we've been told never to do?
    - Global State doesn't always have to be pure data ... think of common information all components need to know
      - Theme Settings (dark mode)
      - Logged In Status of user
- **What** (20 min)
  - React "Context API"
  - What is "context"?
    - Good examples are the temperature of a room, or the light level
    - These are things that we (the components) share in
    - And they're things that the room (the app) gives us tools to control (thermostat, switches)
    - Similarly, the Context API "wraps" your app, or components, making both state and methods available to them
  - Context is "Opt-In" ... components under a context umbrella can use it as they please
    - They `import` the context they wish to interact with
    - They initialize a reference to the context object
    - They can render any state context provides, or alter that state with any methods context makes available
    - It does not have to be specifically passed down like regular component state
  - On the provider side, Context is just a component
    - It has state
    - It has methods that manage state
    - It wraps itself around `this.props.children` and publishes it's `state` object, with both data and methods
  - Consumers of contexts (it's `children`) can read state from it and use any methods it exposes to alter state.
    - Changes to context state are instantly seen by all other subscribing components
- **How**
  - Interactive Demo of the Context API
  - This demo has you building out a context based system and using many components to "subscribe" to it
    - You'll be demonstrating multiple contexts along with class and function components
  - The demo should be built out incrementally as we layer on each piece of it, using different techniques
- **Experimentation and Discovery Ideas**
  - A good way to draw this out is with a cloud at the top of your drawing
    - The cloud has both state variables and state altering methods
    - Beneath, components are drawn
    - Instead of a top-down approach any component "under" the cloud can ask it for state or methods (draw the arrows in both directions)

## Lab Notes

While you might think we're going to pull out all of the To Do logic into a provider ... the actual assignment is going to be to implement some application settings that the To Do app will use to work differently.

Yes, we could have rewired the entire thing, but To Do is still a small little app and there's nothing to be gained by moving it's state elsewhere.

However, something that many components/pages/apps can use -- that's a great use of Context

## What might students struggle with today?

- Be prepared for students to struggle with a 3rd way to handle state.

## Past bugs, issues or surprises...

While using the Mantine Component Library, know that the Slider component has its own `onChange` method that by default, takes in a value instead of an event.  The custom `useForm()` hook's handleChange method will work if parameter validation is built in.  If  the parameter is an object, values can be gotten from the target. If the value is a number, the name can be hard coded as 'difficulty' and the value can be directly assigned the value of the parameter.

## General Comments and Notes

Mantine Styling favors two options:
1. the use of `createStyle` to create a customizable `useStyles()` hook  within the component.
1. using specific class names in component to impact style.  For example, to add a theme-determined margin-bottom of large to a `<Text>` element, do this: `<Text mb="lg">`

Note: using an inline `style` tag or separate `styles.scss` file works to some extent, but does not override the exist Mantine theme well and can be less dependable.  Examples exist in today's solution and demo.
