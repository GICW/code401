# Lecture Notes: Redux - Combined Reducers

## TOPIC 1 - Combining Reducers

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

## Examples and Notes

Combined reducers is nothing more than pulling in more than one reducer from source and creating a keyed object from them.

```javascript
import todoReducer from './todo.store.js';
import itemReducer from './item.store.js';

let reducers = combineReducers({
  todo: todoReducer,
  item: itemReducer,
});
```

---

## Using multiple reducers in a component

Once done, any component can reach into the store and get either one, both, or all ...

```javascript
import * as actions from "../../store/todo.store.js";
import * as itemActions from "../../store/item.store.js";

const mapStateToProps = state => ({
  todo: state.todo,
  item: state.item,
});

const mapDispatchToProps = (dispatch, getState) => ({
  deleteItem: id => dispatch(actions.deleteItem(id)),
  hideDetails: id => dispatch(itemActions.hideDetails()),
});

// Note: this syntax also works!
// Redux will automatically pass params to the action creators for you
// const mapDispatchToProps = { deleteItem, hideDetails };

```

---

## What's the point?

- Obey the Single Responsibility Principle
  - Each reducer really should have only 1 part of state to manage

### YES

```javascript
const initialState = { value: 0 };
```

### NO

```javascript
const initialState = { value: 0, numChanges:0, changes:[] };
 // Move those to separate reducers/actions
```

- Is this more work/boilerplate?  Yes.
- Does it allow you decouple logic? Also, Yes.

---

## What about the actions?

- Each reducer technically has it's own actions and creators.
- However, they can cross over and both be dispatched.
  - In this example, if an action of type 'RESET' is ever dispatched by any action creator, both of the reducers would actually respond.
  - This is very powerful, but needs to be well understood or it'll cause unintended consequences.
  - PRO TIP: give your actions esoteric names when you can.

  ```javascript
  //counter.store.js
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 }
      case 'RESET':
        return {value:0};
      default:
        return state;
    }
  }

  //history.store.js
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case 'CLICK':
        return { clicks: state.clicks + 1 }
      case 'RESET':
        return {clicks:0};
      default:
        return state;
    }
  }
  ```
