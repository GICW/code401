# Facilitators Guide:  `<Login />` and `<Auth />`

## Overview

The culmination of the Hooks and Context module, in this class, we'll be building a Login and Authorization system for the UI that allows us to control access to components or other features of the UI given a Users' logged in status and their assigned permissions. This is a very real world use case for modern applications.

### How does this topic fit?

**Where we've been**:
In the previous class we introduced the Context API and the concept of global state. Specifically, we used Context to store site information and theme settings. Things that all components could reference and participate in, but not actual global data, such as for a To Do Application.

**What are we focusing on today**:
Today, we'll be using Context API again in much the same way. We'll be storing and managing state related to the Login status and permissions for a user. As with site settings and theme, this use of Context is for commonly accessed state, but not application data

**Where we're headed**:
In the next class, we'll be wiring up both login and authorization to a live, deployed authentication server/API, as was built previously in the course

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Today, we'll be combining all aspects of Hooks and Context into some real world use cases. The Login/Auth components built in this lab would be an ideal candidate for the students to publish to NPM and use in any future project.

## Preparation

- Introduce Login as the reason to use Context. This is a perfect use case for application state
- Have some good use cases in hand for using authorization to hide/show components/features in the UI.
- Look at previous course student submissions for insight as to what you might see in code review.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Following the first day of Context, students will likely have struggled with wiring
- As with all things React, there are many files at play and many dependencies to manage
- Code review for the previous lab should start with a visual -- draw an architecture diagram, map out the component tree and how they work with the state/methods from context
- Once you have solid foundation reset ... visit some broken code!

### TOPIC 1: `<Login />` and `<Auth />` Components

- **Why** (5 min)
  - Not only do APIs want to protect access to valid users with valid permissions ...
  - Websites and Apps need that same level of control
  - Specifically, we will want to hide/show content and prevent behaviors from users that are
    - Logged in (or not)
    - Logged in and have proper access granted (or not)
- **What** (10 min)
  - Because we have a tool called "Context" ...
  - Every component and even parts of components (buttons, for example) can be made aware of the user
  - Given knowledge of the user's login status and their permissions we can easily control what they see
- **How** (30 min)
  - We'll need 2 components
    - `<Login />` will initially render a login form.
      - Once a user has Authenticated with the server ...
        - We will change to showing a "Log Out" link
        - We will store the token we get from the server, so that we can keep re-authenticating
        - We can keep this in our global context
    - `<Auth />` will consume the global context and can be used to "wrap" any part of the application
      - This acts as conditional.
      - When users are authenticated and/or have the right permissions, the children will render
      - i.e. Only visible if you are logged in `<Auth><div>Secret Stuff</div></Auth>`
      - i.e. Only visible if you are logged in and have delete permission `<Auth capability="delete"><button>Delete</button></Auth>`
- **Experimentation and Discovery Ideas**
  - Draw this on a whiteboard with the class, and discuss with the class how these components will be built
  - What requirements do we have?
  - How can we use the Context API to implement the API shown above?
    - Login Context will store the user's data/profile and token in state
    - The `<Login />` Component will subscribe to the Login Context and show the form or logout link
    - `<Auth />` Component will subscribe to the Login context and refer to it for rendering

### Interactive Demo (60 Minutes)

- Build out the demo as described

## Lab Notes

Today's lab comes in 2 parts. First, they'll be required to refactor both the `<Login>` and `<Auth>` context and components as functions from classes. Why? To get more exposure!  We're building them both as part of lecture, so this gets their hands on that code and logic.

> In the lab folder is a sub-folder called `starter-code`, please provide this to your students

Next, they will add RBAC to the **To Do** application -- Students will use the newly refactored Login/Auth system and wire it into the ToDo app, so that only logged in users can access the app, and only those with the right permissions can do interesting things.

## What might students struggle with today?

## Past bugs, issues or surprises...

If students use the Mantine `PasswordText` component, know that it is is difficult to style inline.  A `TextInput` component with `type="password"` works well.  See today's solution for working details

## General Comments and Notes

- Note that codesandbox.io, heroku and other providers won't let you set cookies from the server to the client. You will need some client code to physically set the cookie or use local storage instead

- Mantine components do not always play nicely with `data-testid` tags. However, testing can be achieved with `screen.getByPlaceholderText()` and `screen.getByText()` methods for form inputs and buttons.  Auth integration tests included in today's solution.
