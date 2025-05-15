# Demos: Redux - Combined Reducers

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install sass redux react-redux @redux-devtools/extension`.
    - Libraries
      - [Sass](https://www.npmjs.com/package/sass)
      - [Redux](https://redux.js.org/introduction/getting-started)
      - [React Redux](https://react-redux.js.org/introduction/getting-started)
      - [Redux Devtools Extension](https://www.npmjs.com/package/@redux-devtools/extension)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

This demo will result in a voting application that showcases a few core features that are similar to what students will be executing in their lab assignment.

This demo showcases how to use multiple reducers to

- Properly model application state into multiple, logical segments
- Work with esoteric action types
- Share common action types

Additionally, it places an emphasis on **refactoring a working application**

## Voting app with combined reducers

> `../demo/combined-reducers`

### Start with the base app

Build out (from scratch) the same voting app demo from the previous class. This will set the stage for a working app that is in need of some re-modeling

### Refactor it using 2 reducers

For this first bit of work, just get the application working the same way that it was previously

1. Break the current reducer up into 2 files
   - `votes.js` and `candidates.js`
1. Within each file, change the state and the reducer to only reflect what should actually be in state for that reducer type
   - `candidates` should only contain an array of objects
   - `votes` should only contain the total number of votes
1. Alter the store (`index.js`) to now require both files
1. Alter the store to add both reducers to the `combinedReducers()` call
1. In the components
   - Require the correct reducer for each
   - If you rename any variables or the keys in `combineReducers()`, make those same changes

### Add some additional functionality

Once you're in a 1:1 state, where the application works the same as before, but with splitting out the reducers, the next stage of the demo is to make all of that work worthwhile and add some additional functionality.

Each of these new features presents an opportunity to troubleshoot where the logic should go, how should we alter state, which reducer carries the data we need, etc.

#### Show the leader

The `<Status />` component should now use the `candidates` reducer to inspect the candidate with the top votes and show them as the leader.

#### Show the vote %

The `<Votes />` component should show the % of votes for each person. For this, it'll need to include the `votes` reducer

#### Disable Candidates

The demo adds some logic to the vote component by adding an additional feature allowing you to "disable" a candidate so their votes no longer count.

- This requires a new case in the reducer to add a `.disabled` property to the candidate
- It also adds logic to the component ,removing the onClick if the person is disabled
  - Note that this can also be done as logic in the reducer ... pros? cons? Discuss!
