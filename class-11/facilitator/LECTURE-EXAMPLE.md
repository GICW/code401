# Lecture Guide: Event Driven Applications

It's important to start the students off with confirmation that they already know all about event driven programming. We've done it since 201, but have never really put a name on it, or assigned it a pattern until now.

In classical programming, this is akin to the "Observer" pattern

Often referred to as "Pub/Sub", the pattern follows where one party will publish an event, and another party will subscribe to it.

- Neither has knowledge of the other or their context, they are only participating in a blindfolded conversation, like someone shouting from a mountainside
  - "This thing just happened..."
  - "Cool, thanks for letting me know, I don't care"
  - "Cool, thanks for letting me know, I need to do some stuff now"

## TOPIC 1: Events & Event Driven Apps

- **Why** (5 min)
  - Much of what we've done is linear
    - Salmon Cookies, Bus Mall, etc. The entire app "runs" when the page loads
  - Some of what we've done is event driven
    - Click and Form Handlers
  - How do real applications work?
    - Look at any app on your phone. Do they just start, run and quit?
  - How does the world work?
    - Do you squint when the sun is bright?
  - It would be nearly impossible to have a running list of every thing that has to happen on every event.
    - How many things have to happen when the sun gets too bright?
      - Pupils dilate, Hands cover eyes, Neck bends your head down, etc.
      - Would you want to write a function that calls 1000 other functions?
      - Or just say "the light is a 10/10 right now" and then any body part that has a job to do can just do it ...
      - That's the power of events
- **What** (10 min)
  - Dive into a few obvious and non-obvious event examples
    - `button.addEventListener('click', function() { })`
    - `$('.buyButton').on('hover', makeNoise)`
    - `app.get('/location', (req,res) => {})`
  - In the first 2 examples, the browser is waiting for a user to take an action.
    - When done, the callback functions run.
  - In the express example, the server is running ('listening') for requests.
  - These examples work well when you can quickly wire them up in a short demo and use that to assist in your talking points
- **How** (30 min)
  - Create an app, visually on the whiteboard, or by taking notes
  - Take student ideas for building an event driven application
  - What is the purpose of the app?
  - What events might it be important to notify other code about?
  - What other parts of your app might want to know and respond?
  - What code do you wish you could write to do this?
- **Experimentation and Discovery Ideas**
  - Turn your class into an event driven app.
    - It's fun to give students index cards with words on them
    - Whenever the thing on their card happens, they have to stand up and say something
      - i.e. When you say "jQuery" or when you mistype something, or if a siren is heard outside
  - For the design an app phase, there's a few good directions to lead them in.
    - Lead them away from anything visual. (We are in Node.js)
    - Your demo is simulating CRUD ops on a database, so maybe lead them in that direction
    - Games are a natural for events (players taking turns, doing actions)
      - Tic-Tac-Toe, Simon, etc

## TOPIC 2: Node.js Events

> *"Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called."* - Node.js Event Documentation

- **Why** (5 min)
  - In the browser, we have the DOM as well as jQuery to help us wire events
  - That's purely visual, though ...
  - On the server side, where we're using Node.js, we would like a similar system
  - Because Javascript is natively Asynchronous, Node.js is largely build around events
- **What** (10 min)
  - The developers of Node.js have exposed the events API for developers to use in their apps
  - Events are emitted ("fired", "triggered") by name
    - Emitted events can optionally carry data, often called "payload"
    - `emit('light', {brightness:10, source:'sun'})`
      - The event here is called "light"
      - It's data (payload) is the object that describes more details
        - This doesn't have to be an object. Payload can be any type of data
  - Event Listeners wait for ("subscribe to", "listen for", "monitor") events by name
    - `events.on('light', function(payload){ // do something with that object })`
      - When the 'light' event is emitted ...
      - Run the callback function
      - The callback function receives the object emitted as it's argument
- **How** (30 min)
  - Use an interactive demo to build an event driven system using Node events
  - Build a monolithic version (one file)
  - Refactor into a modular system
    - This will force you to use an event module that exports a singleton
- **Experimentation and Discovery Ideas**
  - The stock demo is a very simple CRUD emulator which hits the lecture points
  - The app that you designed with your students in the previous section of lecture might prove to be more engaging.
    - However, it does carry the risk of being live-developed, so do this with caution if you do.

## Examples

### Browser Events: You can quickly wire these up in a code sandbox for a visual

- `button.addEventListener('click', function() { })`
  - "when the click event happens on a button, run this callback function"
- `$('.buyButton').on('hover', makeNoise)`
  - "When an element with the class 'buyButton' is hovered, run the `makeNoise()` function
- What's actually happening?
  - It "registers" the event handlers
  - It monitors the browser and anytime you do anything (move a mouse, click, etc) it "fires" an event.
  - 99.999% of the time, there's not an event listener that cares.
    - Sometimes there's internal things that care
    - Most of the time, its your code
  - Go to the Chrome console and create a listener on something like mousemove or hover and move your mouse around, watching the console.

### Express "Events"

- `app.get('/', (req,res) => {})`
  - "In our app, when the 'get' event happens on the '/location' route, run this express callback function
  - Again, how is this happening?
  - When you register your routes, express starts to monitor all inbound requests
  - "When a request happens ..." express fires an event and your matching "listeners" run

### Node.js Event Handling

- Node.js has it's own event system, built in
- <https://nodejs.org/api/events.html>
- These wire up just like other event systems.
- 'on' wires up a listener using 2 params
  - event name
  - callback function to run (receives any payload)
- 'emit' is the way you 'fire' an event by name, with some payload.
- When an 'emit' happens, any event listener that was setup to listen for that event will trigger itself and run it's function. Any payload that emit sent along is given to that callback function.

This simple example shows how events trigger code.  Note how there can be multiple handlers for an event type.

Could you have just made those into functions and called them directly? Sure. But imagine a large system with handlers in many files. Far easier to just fire an event with some payload and allow any number of modules to respond as they please.

```javascript
  const EE = require('events');
  const events = new EE();

  events.on('noise', (message) => {
    console.log(message, 'was too loud');
  });

  events.on('noise', (message) => {
    console.log('ugh, kids')
  });

  events.on('quiet', (message) => {
    console.log('I could hardly hear', message);
  });

  events.emit('noise', 'ROCK & ROLL!');
  events.emit('quiet', 'Lullabye and Goodnight');

```

Output:

```bash
ROCK & ROLL! was too loud
ugh, kids
I could hardly hear Lullabye and Goodnight
```

## The future

Have a discussion with your class about how you might build a big system with this as the cornerstone.

How might you change your approach in architecture?

How do you imagine things like push notifications on your phone work? Alexa?
