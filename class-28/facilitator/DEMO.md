# DEMOS - Component Lifecycle / `useEffect()` Hook

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Create React App](https://create-react-app.dev/docs/getting-started).
1. Install third party dependencies.
    - Run `npm install chance`
    - Libraries
      - [Chance.js](https://chancejs.com)
1. Replace the `src` folder created for you by Create React App, with the `src` folder provided in the demo folder.

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Effect Hook

> `/demo/effect-hook`

This demo is best done as a part of lecture, over 2 sections.

In the main part of the lecture, you'll be explaining theory and drawing diagrams. Backing that up with a demo, while still in the lecture portions works well.

- "What if we wanted code to run only on the initial render (like componentDidMount)" ... code it
- "Wouldn't it be great if we would only do things when a certain part of our state changes?" ... code it

### Basic Use

First, build out the basic app and component, which allows you to enter a name in a form, submit the form, and see the name render out in a list.

> This a good chance to recap the state hook again as you build this piece out.

Once done, add multiple effects, one at a time, so that you can showcase how each of them responds to different parts of the lifecycle. They all do something simplistic (changing the title bar) but also do a `console.log()` so that you can see the amount of chatter that happens in a component during the rendering cycle.

While this demo is crucial to the students understanding the effect hook and how it operates, it's also a great reminder of the overall lifecycle of a component. Use this opportunity as well to use your react debugger tools in the console to witness state changes and re-rendering.

## Deployment

> All deployment targets require your code be linter clean and warning free or your application will not build!

### Netlify and Amplify

These are both as easy as:

1. Create an account
1. Create an app
1. Connect your GitHub
1. Identify the repository and branch

Both will auto-deploy on every check-in to the specified branch

### GitHub Pages

1. Install the dependency into your app: `gh-pages`
1. Add these scripts to package.json:

   ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
   ```

1. Identify your GH Pages site as the "HomePage" in package.json
   `"homepage":"https://playpen.github.io/mysite"`
   - Note, this property will break your amplify/netlify builds...

1. Use the supplied action (in the demo folder)
1. At GitHub, go to secrets and create the following:
   - `actor` - your GitHub username
   - `repository` - the repository you will deploy to
   - `PERSONAL_TOKEN` - Your personal access token that you create in settings

On every check-in to your main branch, the hook will run and create a new react build under the `gh-pages` branch and your website will be published on github
