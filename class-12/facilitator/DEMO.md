# Demo: Socket.io

This demo continues to work on a simulation of the human body, with the various body parts emitting events to the brain, and then the brain re-broadcasting those events out to the rest of the body.

> For example, you go outside and the eyes detect light. They tell the brain by emitting an event (light-detected), and then the brain broadcasts that out with a new name ('light'). Some of the other body parts have listeners for "light" and respond in kind. Maybe the arms raise up and cover the eyes. The eyes squint a bit, etc.

You can take this analogy as far as you like, time permits, or the students want to keep building it out

## DEMO: Socket.io Basics

> `demo/basics`

The basic demo wires up a simple hub server and client, in support of the core lecture topic ... just to set the pattern for network event wiring.  Things to focus on:

- When a client connects, the server runs a callback function which is given a socket
- In that function, the server sets up the listeners
  - On each event, it'll run a function
  - Often, in a hub, those functions emit other events for all connected clients to "hear"
- On the client, you can fire and hear events.
- Essentially, your server and client are having a conversation, so long as they know what the event names are
  - They are running functions on each other's code, remotely and in real time.
  - Think of this like an API call, but you don't have do all the headers and request stuff.  You're just "always" connected and using events you can ask for info and broadcast data responses

## DEMO: Socket.io App

> `demo/body`

Now, we get to have some fun and build out our human body simulator, but networked, and showcasing some advanced Socket.io features

Note that each folder in this demo is a server unto itself. They all have a package.json and all need to have `npm install` run. They are designed to each run on different machines, all over the world. It's a great idea to give these to your students and give them your IP so that you are all connected and driving events on each others machines

- Each body part is connected to the brain (by using the `.connect()` method)
- But each body part is also independent.

Things to point out

- Clients will automatically reconnect and re-bind events after a disconnect (server restart, etc)
- Socket.io is managing all of the events, headers, and client pools
- The server (brain, in this example) will be the 'hub' for many application types (namespaces) and is agnostic to what's happening, it just brokers the events

It can help to draw diagrams of how these apps are all talking to one another.

> You will need one new terminal for each of these apps to run in. Make it very clear that although you're working in a single folder, these are all technically different apps that could be run on different machines.  If time allows, have the students wire up some of the listener apps to respond to events from your server and app

### Brain

> `brain.js` and `brain-monolithic.js`

- Sets up a listener on port 3000
- Initial Build: Global Namespace only
  - Create a global event pool (`io`)
    - Responds to and re-broadcasts some generic events (light) that all of the body parts might care about
    - Every part would connect to this main pool
  - Create other buckets (namespaces) for other event types
    - Here, maybe there's a namespace called 'guts' that the stomach connects to

- There are 2 versions of the brain presented. One which is very monolithic, and another which has the handlers and pools broken out into modules.
  - Build the monolithic one first, focusing on the wiring
    - You'll have plenty of time to explore with your students building out a "body"
    - Ask them "what part should we build next?" and interactively add legs, arms, nose, stomach, etc
      - As you build the parts, build the appropriate brain listeners and namespaces
  - Modular Version
    - Time permitting, refactor your brain to be modular, so you can showcase how to break up (what is now a big file) into something more manageable
    - Don't stress about getting this in.
      - It's a great way to level up your class, but you can always go modular during the code review for this class
    - Modularizing things can make for things to be easier to consume, because the pieces are smaller
      - However, this makes for more parts and things to pay attention to, so work with your class on the pros and cons here
      - It's important for them to see both things!
    - When you modularize, send the server (`io`) as a param to each of the namespace modules
      - In each, take that as a param and follow the same pattern in each as you did in the main app
      - This technique shows how you can pass information to a node module, and how to break a big thing down

### Body Parts

> `arms/arms.js`, `eyes`. `nose`, `stomach`

- These all work the same way
  - They connect to the server's main (global) connection
  - They may also connect to namespaces (health, guts, etc)
    - Why??
    - This allows body parts to get targeted messages or opt not to
    - The eyes don't care about gut events, so they would never connect to that namespace
- We've presented them with varying design choices
  - Some of them have inline callbacks
  - Some have named callbacks
  - Some have the callbacks in the same file as the listeners
  - Some have the callbacks in another module
  - Present these to your students as viable, working options -- we want them to see various design patterns and be comfortable with the variety, as frustrating as that can be

### Testing Notes
