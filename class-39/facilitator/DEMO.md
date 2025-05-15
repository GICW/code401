# Demos: Redux - Additional Topics

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install sass @reduxjs/toolkit redux react-redux redux-thunk @redux-devtools/extension enzyme @wojtekmaj/enzyme-adapter-react-17`.
    - Libraries
      - [Sass](https://www.npmjs.com/package/sass)
      - [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
      - [Redux](https://redux.js.org/introduction/getting-started)
      - [React Redux](https://react-redux.js.org/introduction/getting-started)
      - [Redux Devtools Extension](https://www.npmjs.com/package/@redux-devtools/extension)
      - [Enzyme](https://www.npmjs.com/package/enzyme)
      - [Enzyme Adapter @17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17)
      - [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

This demo will result in a voting application that showcases a few core features that are similar to what students will be executing in their lab assignment.

## Redux Toolkit

> `../demo/redux`

This demo shows 2 ways to build a simple Redux Store

1. The way we've been doing it all along, with a "Ducks-like" approach, as a reducer/action modules
1. Using redux-toolkit slices, which introduces a new pattern for creating a store and a reducer pack

### 1. The RTK Store

The Redux Toolkit `configureStore()` includes basic middleware common to all Redux apps - thunk, redux devtools, logging.

You still combine your reducers, and then `configureStore()` wires up everything else you need, saving you boilerplate and shielding you from common configuration mistakes.

> NOTE: `configureStore()` requires an object with a key of `reducer` as it's argument

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import peopleSlice from './people.store.js';

const reducers = combineReducers({ people: peopleSlice });

const store = configureStore({ reducer: reducers });

export default store;

```

### 2. RTK Slices

RTK Allows for a very declarative "slice" definition for creating your reducers and actions. These slices very distinctly create your state models, which will eventually feed your multiple reducers.

```javascript
import { createSlice } from '@reduxjs/toolkit'

const peopleSlice = createSlice({
  name: 'people',
  initialState: [
    { name: 'Mary' },
    { name: 'Bob' },
    { name: 'Jamie' },
  ],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload })
    },
    remove(state, action) {
      return state.filter(person => person.name !== action.payload)
    },
  }
})

export const { add, remove } = peopleSlice.actions

export default peopleSlice.reducer
```
