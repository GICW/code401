[Thinking in React](https://react.dev/learn/thinking-in-react){:target="\_blank}

1. Summarize the five steps of thinking in react.
   1. Draw a mock and identify the hierarchy of the components.
   1. Create a static version of the mock up, with a React Component for each thing in the hierarchy.
   1. Identify the state in the mock (things that will change); then, identify what state is memory and what state is computed.
   1. Match up which memory state goes in which component, and which computed state goes in which props.
   1. Provide event or callback props, to pass data back up.

[State: A Component's Memory](https://react.dev/learn/state-a-components-memory){:target="\_blank}

1. What is one reason a local variable isn't sufficient for managing a React component?
   - It doesn't persist between renders.
   - React doesn't know to rerender when its changed.
1. What is the argument to the useState hook, and what are the two parts of its return array?
   - The argument is the initial value.
   - The first return is the current value for this render.
   - The second return is a function to call to trigger a render with a new value.
1. How can Component A access state from Component B?
   - Component A can only access state from B if B passes that state as a prop to A.
