# DEMOS - Advanced State with Reducers

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install chance`
    - Libraries
      - [Chance.js](https://chancejs.com)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## `useReducer()` Hook

There are 4 things to consider when using the reducer pattern to manage state: Initial State, Actions, Reducer Function and Dispatching the action

Students will have a very tough time grasping all of that at first and will want to know "why" we do all of this complexity when we can just setState with a function like before. This is a good opportunity to preview the concepts of "Redux" and note that complex state is best managed in this way, so it's best to get a handle on the mechanics now, with smaller and less complicated state, even if it seems like overkill.

### 1. Initial State

Simply put, this is a variable that describes your state before the app starts. This can be a simple as a single variable or it can be an array, object, or any combination. For example:

> Call out that here, state is the characters AND the TV Show. It's simple to look at, but because there's multiple parts to state, that makes it "complex" and ideal use of a reducer where we could change all of those things independently

```javascript
const initialState = {
  show: "Sesame Street",
  characters: [
    {name: "Ernie", color: "orange" },
    {name: "Burt", color: "yellow" }
  ]
};
```

### 2. Actions

Describe what action you want to take with your state, as well as any additional data or information that might help complete that action. Think of actions as a consistent way to call a function.

Actions are always plain objects with 2 keys: `type` and `payload`

The "type" must match a handler in the reducer function...

```json
{
  type: 'ADD_CHARACTER'
  payload: { name: "Cookie Monster", color: "blue", age: 57 }
}
```

### 3. Reducer Function

The reducer function, much like `Array.reduce()` operates by accepting the previous state along with some data, performs an action, and **returns the next state**.

We default it to seeing the initial state which would be the case for the first time your application starts.

The reducer looks at the action, and based on the `type` property, it uses a `swithc/case` statement to do the handle change to state, and then returns the changed state.

> Note: We don't change the state (it's immutable). Rather, we return what the next state should be. A common pattern will see is the use of the spread operator (`...`) with the state object as we return the next state without mutating the original.

In this example, to "add" a character, we spread out state (makes a copy) and further spread out the characters and append one. Can you describe how "remove" works?

```javascript
function characterReducer( state=initialState, action ) {

  switch( action.type ) {
    case 'ADD_CHARACTER':
      return { ...state, characters: [...state.characters, action.payload] };
    case 'REMOVE_CHARACTER':
      return {...state, characters: state.characters.filter( char => char.name !== payload.name ) }
    default:
      return state;
  }
}
```

### 4. Dispatching Actions

Given an initial state, the shape of what an action looks like, and a reducer function that could run your action, how do you actually do it?

You might think that running something like this would do it `let newState =  reducer(state, myAction);`

Technically, that's what needs to happen, but you don't have permission to do that in react. Rather, we **dispatch the action** we want to run, using the `useReducer()` hook and "dispatch" the action you want to run. React knows how to hook it all together and update the component's state.

```javascript
  function myComponent(props) {

    // This identifies your reducer function and "runs it" the first time, using your initial state
    const [state, dispatch] = useReducer(characterReducer, initialState);

    // Later, when you want to add
    function addCharacter() {

      const character = { name: "Elmo", color: "red" };

      // What we want the reducer to do ....
      const action = {
        type: "ADD_CHARACTER",
        payload: character
      };

      // Make the reducer do it ...
      dispatch(action);
    }
  }

```
