# Demo: Message Queues

This demo continues to build out our simple chat client, **slick**

What's different today is that instead of a pure broadcast / listen system, we'll be adding a queue to the Message Hub and actual subscriptions to our clients.

Clients will still respond to messages as they arrive, but we'll allow them the additional functionality of "subscribing" to events, ensuring that they can always retrieve any undelivered messages for any event, should they disconnect

> Practice this demo multiple times Get a feel for the ordering, talking points, and how to interleave what they've already built with what we need to build with the queue objects. There's no new code concept or libraries today, just wiring it all together in a way that makes sense. By knowing them well, you can make a better decision in how to use (or not) the Message Queue demo and how to build up your live code around the talking points

## Live Coding Demo(s)

### Simple Queue

The first demo (simple-queue) basically builds a really simple version of the AWS queues, so that students can see a possible way to implement a queue object for storage and see the send/receive pattern in a simple app. Sometimes too much problem domain can get in the way of the basics.

This demo uses 3 files to showcase how a queue works in it's simplest form.

Run the server, run the client, and then run the greeter. The client will log every hello message.  Now, if you stop the client, the greeter will still be firing hello events, and the queue server will be hanging onto them in the queue object as they've not been delivered. If you then restart the `client.js`, it'll start by getting all of the old messages, and then pick up the new ones as they come in.

Here, we have realtime delivery and confirmation, and a way to get anything we missed while we were disconnected!

> `demo/queue/hub.js`

Sets up a queue 'hub' server with a queue object with a key in it, to store messages for the "add chore" event. This simulates a parent passing out chores

- Whenever a message comes in to the hub from the "parent"
  - Assign it an ID
  - Add it to the queue, keyed by that id.
  - Respond to the sender (parent) with an event of 'added' so the sender knows their message was queued up
  - Then, broadcast the message out to everyone else (the children)

When a child sends a "received" event to the hub, it'll contain an ID. The message with that ID is then removed from the queue, indicating it was properly sent.

> `demo/queue/child.js`

On connect, it issues a `getall` event to tell the server to iterate all chores in the queue that weren't yet delivered.

On any event received, it emits a received event back to the server to let it know that it was delivered.

> `demo/queue/parent.js`

A simple CLI app that takes a command line argument and emits that as a new chore to the hub

## Advanced Topics

Once you build out the core application and have established a sound base, you can explore with your class more advanced topics:

- Design Patterns
  - We can create our own software that encapsulates all the features we want our clients to have.
  - Export the Client from `demo/queue/lib/Client.js` and write / run tests.
  - Discuss / diagram the benefits of creating an abstraction of features that can apply to `Clients` with slightly different use cases.
- FIFO Queues
  - How can we ensure that everything in the queue is processed in order?
  - You cannot simply loop the messages. If any of them fail, you have to stop.
  - An object won't work here ...
- Segmented Queue
  - Right now, everything is in one master queue for the event
  - Can you support a separate queue for multiple events? Dynamically?
  - How can we have a queue for each child separately (assuming you run child.js multiple times)?
    - This might be a case for socket.io rooms, or some deeper id's in the queue object
- Persistent Queues
  - What happens when this server stops?
  - Can we somehow ensure that the undelivered messages survive a restart?
