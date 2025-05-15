# Demo: Events

## Single file event system

> `demo/monolithic`

- Create a new event emitter instance
- Wire up some listeners
- Fire events
- Talking points: disconnected code (functions don't call each other in this architecture)

> `demo/modular` - is a multi-file demo that shows how Node events work over multiple files/modules and how you must share a common core to make it all tie in.

- Start by making a new folder and copying in the monolithic file you built earlier.
- Move to separate files
  - One which is the brain or the "hub"
  - One for each part or listener
  - Event Pool - Demonstrate that you cannot simply "require events" and go ... You'll need to create a common event controller for them to consume
    - Because you create and use an "instance" of events, students will need to build an events module that exports a singleton
      - ... A module called "events" that requires 'events', creates a new instance and exports that instance.
      - Any code that wants to share in events must then require that events module, and use it's `emit` and `on` to work in the same queue

### A note on testing

Note that the demo code does not demonstrate tests.

- You should not test the events themselves. (Node.js already tested the event system)
  - Rather than see if you can trigger an event, they should be testing the callback functions
  - How? Make them as separate functions, and test just those.
  - The more you modularize, the easier things are to test, because each module is more of a unit
- A full end to end test can be done, but this is an "integration" test. Discuss the differences
