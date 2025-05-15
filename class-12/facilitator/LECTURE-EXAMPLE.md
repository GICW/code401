# Lecture Guide: Socket.io

## TOPIC 1: TCP Networking

- **Why** (5 min)
  - How does the internet actually work?
    - (this question never stops being asked, and has no final answer!)
  - Gaining an understanding of what's happening "on the wire" as requests happen will really help us to write more thoughtful, efficient code.
  - Knowing what's possible, what's difficult, and how things work will give us a broader view over what types of applications we can write
    - ... and what we can't
- **What - TCP** (30 min)
  - TCP is a transfer **protocol**
  - What is a protocol?
    - A set of rules or procedures for transmitting data
  - TCP is a 3 step handshake process where 2 computers have a short "conversation" and setup the transfer of data
- **How** (done along with, and in support of, the "what" topics above)
  - Use an interactive drawing to illustrate how this looks
    - A pile of sand being moved from one point to another a spoonful at at time is a good visual
  - Real World Examples
    - Uploading files to a server
    - Netflix (the client (your tv) assembles that data as it gets it, not when it's all done)
      - This is how "streaming" works, and often while you'll see the "buffering" icon if something above is wrong
  - TCP Protocol processes data in chunks using SYN/ACK messaging
    - Computer 1: "Let's connect"
    - Computer 2: "OK"
    - Computer 1: "I'm ready to send data"
    - Computer 2: "Great! ... lets have it!"
    - Computer 1 then sends data 1020 bytes at a time ... Computer 2 keeps track of what it got
    - Computer 1: "All Done!"
    - Computer 2: "Thanks, I'll take it from here"
    - Then they both agree to stop talking for a while
    - That initial connection is still open
      - Either computer can start the "I'm ready to send data" step again and they can keep "talking this way"
    - At some point, they agree to close the connection and stop all communications
    - Officially this is called the "SYN-ACK" process (SYN=Synchronization, ACK=Acknowledgement)
  - TCP Sessions can remain connected, so state can be preserved
    - You will need to manage the state of the connections
    - Handle connections and disconnections
    - Handle inbound and outbound communication
    - Massive security concerns
  - Data is transferred in small chunks from the initiator to the receiver
    - The receiver assembles and processes the data
    - NOTE: Data is just data. Usually a string
      - If it's JSON, a story, a number, it doesn't matter
      - The receiver's job is to process whatever it gets
  - So, once the data is sent using the protocol, how do we process it?
    - In a TCP client/server system, you have the task of deciding (and agreeing to) the exact nature of the data so that you can process it properly.
  - Benefits and Use Cases
    - By keeping connections open, communication is always possible
    - State can be maintained
    - You are limited to just data (buffers) going back and forth, no code
      - So, how can we do events?
      - You'll need to simulate it, with a custom API
        - event payload (space separated)
        - {event:name, payload:stuff} (stringified JSON)

## TOPIC Socket.io

> This lecture is best done with a smattering of live-coding done within each segment to illustrate the concepts. For that reason, the estimated times below are larger than usual, to give you time to either demo and lecture simultaneously or do a more traditional demo following the conceptual discussions.

- **Why** (10 min)
  - WebSockets are very similar to TCP (in fact they are)
  - Simple, Stable API
  - But only 4 methods/events: `open`, `message`, `error`, `close`
  - While it lets us do the same thing we did with TCP on the server side, that's limiting
  - Socket.io is a library that provides actual events and groups using WebSockets
- **What** (30 min)
  - As with our TCP Server, using only WebSockets, we'd have to respond to the `message` event
    - And take in a custom object or text, break it down, deliver it socket by socket.
    - You'll also have to completely manage the connection pool
    - Lots to manage, many opportunities for a breakdown, error, or failure
    - Note, there's a short demo available that illustrates the use of WebSockets
  - Enter Socket.io, which marries the concept of a persistent connection with actual events like Node
    - `socket.emit('some-event', someData);`
    - `socket.on('some-event', (payload=>socket.broadcast('event-name',payload)))`
    - Once connected, any client can subscribe to or emit any event
    - Usually, systems are setup, like with TCP, using a server hub to manage and delegate events
  - Additionally, Socket.io allows you to segment your users into groups and subgroups
    - Namespaces are ways to group users at a high level, simply using the url.
      - Global Connection Pool: `const io = require('socket.io')(3000);`
      - "Tech" Pool: `const tech = io.of('/tech');`
      - "Music" Pool: `const music = io.of('/music');`
      - Clients connect via `const socket = io.connect('http://localhost:3000/tech');`
    - Rooms can exist as another means of grouping users
      - Unlike Namespaces, which are setup by the developer and managed by the server, rooms are created on the fly as users `join` them, and are removed when empty.
      - `tech.emit('join','github');` // Creates a room called 'github' in the 'tech' namespace
      - Once created, clients in that namespace and room can communicate directly, and/or the server can target only these connections
- **How** (45 min)
  - Interactive Demo -- `demo/basics`
  - You'll want to do a quick demo of WebSockets (to illustrate the pain points of doing this manually)
  - Refactor that into using Socket.io
    - Should greatly reduce the syntax required, and make it much clearer what's happening
  - Refactor again with Namespaces and Rooms
    - You'll want a good "why" here ... the demo use case shows a school namespace with classes as the "rooms"
- **Experimentation and Discovery Ideas**
  - Come up with your own more interesting problem domain if you choose.

## Notes

### Web Sockets

- Maintain an open TCP like connection over HTTP
  - (Still on OSI layer 7, but reliant on layer 4)
  - Uses special headers to keep open connections
  - Sends messages back and forth
- What's the main difference between Web Sockets and TCP?
  - TCP is a protocol
  - TCP is client-less
  - Web Sockets rely on TCP

### Socket.io

- NOT WEB SOCKETS
  - (but it uses like them...)
  - Client + Server Architecture
  - Eventing layer on top of Web Sockets
  - Makes use (sometimes) of Web Sockets but also has fall-backs
  - TCP over HTTP
    - Must work to keep the connection open (heartbeats)
    - Must have a connected client (code) to function
- Socket.io Advantages
  - Connection pool management
    - Can always query `.clients()` in a namespace to see who is connected
  - Namespaces (i.e. "sports")
  - Rooms within a namespace (i.e. "Seahawks")
  - Can stand alone
  - Can integrate with and use express or http as a service

### Events Driven Architecture with Socket.io

- Standard node events are sent with `emit()` and received with `on()` ... Socket.io uses the same methodology/terminology.
- In an event driven node app, the entire app is in memory, and (through a common event pool), all parts of your application can emit and hear events, communicating with each other.  However, no outside application can participate in these events natively.
- With Socket.io, the entire purpose is to have events shared between 'disconnected' participants.  Through a mediator (server), clients connect, emit events, and respond to events from the server.  A typical flow works like this:
  - Client Applications 1, 2, 3, x ... connect to a running Socket.io server
  - Client Application 1 emits an event called 'speak' to the server, with the data 'Hello World'
  - Server has an `on('speak', (data) => {})` which "hears" that event
  - Upon processing the event, the server may elect to `emit()` an event of it's own.
  - Other client applications that have connected into the server that have a listener on that event type, can then "hear" it as well...
- Not every client will have a listener for every event.
- The server may not have a listener for every event a client send
- Example:

    ```javascript
    //server.js
    const io = require('socket.io')(3000);
    io.on('connection', (socket) => {
      socket.on('words', (payload) => socket.broadcast.emit('spoken-word', payload));
    });

    //client-1.js fires an event
    const socket = io.connect('http://localhost:3000');
    socket.emit('speak', 'I am alive');

    //client-2.js hears the broadcast from the server
    socket.on('spoken-word', (payload) => {
      console.log('heard', payload);
    });
    ```

### Namespaces and Rooms

- These can be used to group and sub-group connections
- No Namespace: `const io = require('socket.io')('http://localhost');`
- "Tech" Namespace: `const tech = require('socket.io')('http://localhost/tech');`
- Understand how rooms work
  - Within any namespace, a client can `join` any arbitrary room
    - `tech.join('github-help')`
  - The server can query and communicate with connections to any room
    - `tech.to('github-help').emit('custom-event', payload);`
- Use them both to ensure uniqueness
  - `tech.of('tech').to('github-help').emit('event', 'message');`
