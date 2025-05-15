# DEMOS - Context API

## Installation

### Requirements

- React version 18.2 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install @mantine/core @mantine/hooks @emotion/react sass`.
    - Libraries
      - [Mantine](https://mantine.dev/pages/getting-started/)
      - [Sass](https://www.npmjs.com/package/sass)
1. To test the demo, replace the `src` folder created for you by Create React App (CRA), with the `src` folder provided in the demo folder.
1. Live code the demo application for students.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "GitHub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Blueprint Component API

> `demo/context`

[Mantine Docs](https://mantine.dev/pages/getting-started/)

The students will be using Mantine during this module for styling. Begin your demo session by creating a simple application with an App component that renders Main => Header, Content, and Footer components, styled with Mantine, along with some basic css of your own to provide a full screen appearance (`app.scss`)

You will need to install with npm:

- `@mantine/core @mantine/hooks @emotion/react` (for Mantine)
- `sass`

> NOTE: Some of these are classes and others are functions. This is by design. We will be demoing how to consume context from both component types later in the demo. Inform the students that it's important to remember both ways to do things. Also, for your first pass at these components, keep it simple just type in some basic content for the content section and your class name/code for the header and some random text in the footer. This first part is only for wiring the app and getting some nice styling from Mantine.

For example:

```javascript
Main.js:
function Main {
  return {
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  }
}
Header.js:
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Code 401: Advanced Javascript</h1>
      </header>
    )
  };
}

Content.js:
class Content extends React.Component {
  render() {
    return (
      <section>
        Here are some really interesting words
      </section>
    )
  }
}

Footer.js:
function Footer() {
  return (
    <footer>
      @copy; 2021 Your Class
    </footer>
  )
}
```

We will be using the Context API to add actual content to each of them, from global state in the 2nd part of the demo

## Context API

> `demo/context`

For this demo, the actual code being written is relatively small, but the concept is again pretty large.

Definitely spend plenty of time in pictures, drawing out the connections between the context provider and the components before you code it out. This should give you a good reference point to refer to as you write out the code.

- The demo wires up 2 context providers and nests them in the `App.js`
  - `Context/Theme.js` is a Context provider coded out as a Function component
  - `Context/Site.js` is a Context provider coded out as a Class component
  - Both of them have 2 exports
    - `React.createContext` which is what components that "subscribe" to context will `import`
    - A rendered component, which will be used to "wrap" the application at a higher level

- There are 3 components that use context
  - `Header.js` is a Class component
    - It uses `static contextType` to get information from a single context
      - Note: static contextType only works if you're consuming ONE context
  - `Content.js` renders context variables from BOTH providers
    - Note that now, `contextType` no longer works (it's a single variable name after all)
    - So, we have to wrap our output in a `<Consumer>` and render a function with context
      - Very tough to read and harder to visualize what's happening
  - `Footer.js` is a function component
    - It uses the `useContext()` hook to identify the context that it wants and then access it
    - This very readable and far easier to maintain
