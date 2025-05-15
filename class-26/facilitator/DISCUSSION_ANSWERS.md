[React Refresher](https://react.dev/learn){:target="\_blank"}

Read the React Quick Start quide.

1. What are the building blocks of a React app?
   - React Components
   - React hooks
1. What is the difference between an HTML element and a React component?
   - Components start with a capital; HTML elements are lowercase.
1. What is JSX and why do we use it?
   - A convenient way to write HTML in JavaScript files and React components.
1. Describe the process of embedding JavaScript expressions in JSX.
   - Curly braces allow goign back to JavaScript from JSX.
1. Does React or JSX have any special features for iteration or conditional logic?
   - No. React and JSX use "plain" JavaScript statements and expressions to compose what gets rendered.
1. How does React know to respond to a user's inputs?
   - React has Event Handlers for common HTML events.
1. What word indicates that a React component manages data with a Hook?
   - All hooks start with the word `use`.
1. How can two react components share data?
   - React components pass "props" from a parent component to a child component.
   - Props can include callback functions, for the child to hand data back up to the parent.

[Render and Commit](https://react.dev/learn/render-and-commit){:target="\_blank"}

1. What are the three steps of refreshing a React UI?
   - Trigger, Render, Commit
1. How do you trigger updates to a component after the initial render?
   - The [set function](https://react.dev/reference/react/useState#setstate){:target="\_blank"} from useState.
1. Does React recreate DOM nodes on every rerender?
   - No, it only updates existing nodes.
1. After React has updated the DOM, what still needs to happen before the user sees the change?
   - The browser needs to paint the new content.
