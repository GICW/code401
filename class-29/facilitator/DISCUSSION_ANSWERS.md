[Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer){:target="\_blank"}

1. What is the motivation for adding a reducer?
   - Managing the logic of multiple pieces of state can become difficult when that logic is scattered throughout a component.
1. What are actions in the context of a reducer? How are they different than setting state directly?
   - Actions are the "things that happen" when state needs to get updated.
   - A reducer will respond to the "action" of "what the user did", instead of driving setState directly.
1. What common list operation is useReduce named for, and why?
   - useReduce is named for Array.reduce
   - Both create a new value given some previous value (state) and a current value (the action).
1. When should you switch from useState to useReducer?
   - When the function is complicated enough. There is no single answer to this question, and it depends on context, familiarity, and preference.
