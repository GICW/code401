# DEMOS - `useState()` Hook

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## State Hook

> `/demo/state-hook`

This demo is setup to be done in 2 separate runs.

### Age

**First**, during lecture as you're explaining the "how" aspect of the state hook, build this app and only implement the "age" component as a dependency, and experiment with state as you explain the topic.

- Sending in a prop (or not)
- Trying to change the state variable directly doesn't work (it's read only!)
- How does the [var,method] thing work?
- When can you call the method to change state? How?

Feel free to go outside of the core demo if questions arise about different types of state (object, arrays, etc) and how they may work. Consider this first demo as the basic basics along with an opportunity to experiment a bit.

### Counter

**Second** as part of a longer demo, build out the counter component, which showcases 2 state variables and a function to alter them.

- Create 2 state variables
- Create a function that changes the counter on a button click
  - Where is that function placed?  Within the actual function!
- Change both states in the click handler
  - Why can you not change the `factorOfFive` value based on the `count`?
    - Setting state is asynchronous, so you end up in a race condition.
- Refactor the component to use a single state variable (an object) instead of 2
  - Pros and Cons to each approach?

## Tests

> Code the tests after you've covered state

You can't always TDD react apps because the end result isn't always well known in advance.

Write on a whiteboard the tests you've running manually as a user.

- What have you been doing over and over to see if the app works?
  - Have the class help you identify these things
- Do that same thing, but in code!
  - It will require some documentation research at the RTL site

## CI/CD Tests

Note that the `.github` folder in the demo contains an action that will run your tests on check-in.

Showcase how this works. This will be a lab requirement for the students moving forward
