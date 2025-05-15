# DEMOS -  `<Login />` and `<Auth />`

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - `cd` into recently initialized React Application root directory.
    - Run `npm install jwt-decode react-if react-cookies`.
    - Libraries
      - [JWT Decode](https://www.npmjs.com/package/jwt-decode)
      - [React If](https://www.npmjs.com/package/react-if)
      - [React Cookies](https://www.npmjs.com/package/react-cookies)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

## `<Login />` and `<LoginContext />`

Note that even though this lab is about logging into a server and authorizing access, we will be mocking this. In this demo and lab, we're focusing on the React side of the equation, building out an authorization context and 2 components, which is a big build.

In the next class, we'll take today's scaffolding and wire-in a server connection

The Logic for this set of components is as follows:

### context.js

- Publishes State through the provider:
  - loggedIn: boolean
  - token: The user's token from the server (we're going to mock this today)
  - login/logout: Functions that allow Consumers to toggle the loggedIn state. These functions set/remove cookies and nullify the token in state
- On load, check the cookie for a token, validate it, and toggle the loggedIn state immediately.

### **login.js**

- This is simply the login form
- It is a consumer of the Login Context
- When the user is not logged in, it shows a login form and/or an OAuth link.
- Otherwise, it shows a button to log you out.
- On a successful login ...
  - it calls the context's `login()` method
    - That function will change the loggedIn state value in context
  - Based on the login status, the form should then hide itself.
- If you are logged in and click the logout button
  - it calls the context's `logout()` method
    - That function will change the loggedIn state in context

## `<Auth />`

### **auth.js**

- This is a wrapper component.
- It should consume the login context
- It will inspect the token if it exists and note the capabilities
- It will then evaluate a boolean based on if the user is logged in not and also if there is a prop called 'capability' that matches any of the users capabilities. The capability check should be optional.

## Sample Usage

Authentication only -- **The div only shows if you are logged in**

```javascript
  <Auth>
    <div />
  </Auth>
```

Authentication + Authorization -- **The div only shows if you are logged in *AND* have read permissions**

```javascript
  <Auth capability="read">
    <div />
  </Auth>
```
