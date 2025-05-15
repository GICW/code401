# DEMOS - Redux - Asynchronous Actions

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install axios redux react-redux @redux-devtools/extension`.
    - Libraries
      - [Axios](https://www.npmjs.com/package/axios)
      - [Redux](https://redux.js.org/introduction/getting-started)
      - [React Redux](https://react-redux.js.org/introduction/getting-started)
      - [Redux Devtools Extension](https://www.npmjs.com/package/@redux-devtools/extension)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

This demo will result in a voting application that showcases a few core features that are similar to what students will be executing in their lab assignment.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "GitHub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in

### async demo

This is a simple demo that pulls in some data from an API.

- Demonstrate first with some stub data in the reducer to get it all wired up.
  - Talking point: start your UI with stub/mock data so you can get work done
- Add in a remote call using normal react events and function in the component itself
  - Talking point: works, but is outside of the Redux ecosystem. What if some other component needs this data?
- Try and wire it up with an action that runs the fetch call
  - You will get a big error from React/Redux
  - Explain that this is because action generators must return an object
- Code out thunk as middleware and explain what it's doing
- Code out an action generator that returns a function that returns the dispatch of the actual action
- Re-Run the code to prove it works
- Replace our skinny thunk with the real one and show that it still works.
  - <https://github.com/reduxjs/redux-thunk>
- Once you have the get working well, triggered by a button, discuss WHEN you can get data
  - If you want it on load, you can use `useEffect()` to immediately dispatch the appropriate action
- How do we save data?
  - If you change from the basic list of names and make each team be a "form" ...
  - You can then do a standard onSubmit of the form to dispatch a new `putRemoteData` action
  - "discover" this idea with the students and then code it out incrementally
  - How do we keep our state in sync?
    - The initial "get" got us a list
    - But now we've changed it
    - Do we trust the DB and update our internal state with the result of the put request
    - Or ... do we re-fetch all of the list from the api again?

The demo showcases a number of interesting things that help cement the demo topics

#### Custom written thunk middleware

Notice and call out the deep currying. Within, we're looking at the action itself and detecting if it is itself a function. If so, run it, sending in dispatch and getState methods. Now, look at the actual action function (sample below) and see that it in fact returns a function instead of an action object.

After thunk runs, it'll run that action function. The action function then (after the async work is done) will dispatch the actual action function (which does return an object). It'll go through thunk again, and end up in the `next()` clause, which makes it run like an normal action

```javascript
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);

```

#### Async actions using async/await instead of promise

```javascript
export const getRemoteData = () => async dispatch => {
  let results = await fetch(api);
  let records = await results.json();
  dispatch(getAction(records));
};
```

#### Calling an API to fetch data on initial load

Use `useEffect()` to fetch data after the initial render. Note the use of the empty second parameter `[]` which will ensure that the effect only runs once.

```javascript
useEffect(() => {
  props.get();
}, []);
```

#### Mapping the dispatch methods

```javascript

// This is done in long form to demonstrate this pattern of mapping dispatch to props
const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  put: (id, data) => dispatch(actions.putRemoteData(id, data)),
});

// We could use the shorthand version of the above if we imported the actions by name
// and called them in the component using their longer names, i.e.
import {getRemoteData, putRemoteData} from '../store/actions.js'

const mapDispatchToProps = {getRemoteData,putRemoteData};

// and then in the component, instead of props.get() it's props.getRemoteData()
```
