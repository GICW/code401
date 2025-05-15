# Lecture Notes: Redux - Additional Topics

This day is centered around React Toolkit. There are many other Redux add-ons and alternatives. By focusing in on one (RTK), we give the students a reason to learn one, read it's docs, and refactor an implementation. This should serve as the basis for their own independent discovery and trials

## TOPIC 1: Store Patterns  - React Toolkit (RTK)

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

## Additional Topics

As we continue down the path of exposure to new Redux patterns, leave notes here as to what was demonstrated, what's current, etc.
