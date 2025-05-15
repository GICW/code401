# Lecture Guide: Message Queues

## Event Driven Development (again)

- Non-linear program flow
- Cloud Architecture is very event driven
  - Lambdas (functions) fire in response to all sorts of activities
  - Services (e.g. S3) fire events when interesting things happen
  - Databases trigger events on every operation
  - In the "serverless" world, when we talk about "Code needing a place to run, and something to tell it when to run" ... queues are very often that trigger.

## TOPIC 1: Message Queues

- **Why** (5 min)
  - Real Time events serve a very specific and useful set of purposes
    - Distribute Processing
    - Separate Concerns
  - There are issues with "Real Time" that might not seem readily apparent
    - Events are not guaranteed to be processed in order received at the hub
      - Often times, order is important
    - Events broadcast by the hub are not guaranteed to be received by all subscribers
      - Network issues can arise
      - Client systems can go offline
      - Some subscribers must receive 100% of all messages to properly function
  - Interject with some real-world examples of these types of issues/use-cases
    - Micro Architecture
    - Trigger code in other systems, languages, etc to run
    - Simplifies and tightens up your code base
    - Distributed Processing
    - Handle common events at scale
    - i.e. An order was delivered and signed for
- **What** (10 min)
  - Message Queues to the rescue
  - A Queueing server answers the above concerns by implementing delivery logic
    - Maintains a list of the subscribers and which event/queues they subscribe to
    - It will attempt to immediately broadcast messages as before
      - But it will track receipt by all subscribers
      - Maintain a list of undelivered messages to any subscriber not receiving a message
    - Clients can make a "pull request" of messages
      - Can be done automatically on connection to the server (dumping the queue)
      - Or with an explicit request of all messages
      - Or, as an ordered list, one by one (`.next()`, ...)
  - So ... what is a Queue, exactly?
    - Quite literally, a queue is a list of things to process.
      - We call these things "messages"
      - Messages carry a "payload"
        - This can be simple text, JSON, Binary, etc
    - Queues are like disconnected conversations
    - There are 2 participants
      - A "Sender" puts something into the queue
      - A "Consumer" takes messages off the queue and processes them
        - Consumers delete the messages when they are done.
      - There can be many consumers (scale)
        - But each message is only intended to be processed once
    - Types of queues
      - Standard
        - Unordered.
        - Think of this as a bingo ball cage
      - Ordered (FIFO)
        - Ordering is important
        - This is more of a classic "Queue" where things generally are dependent.
        - Much tougher to implement on the consumer side.
- **How** (30 min)
  - Most of the work we've done to this point has been on the client end, as the servers have been largely re-broadcasting the same messages, acting as a "dumb hub"
  - We will now need to strategize on the server side
    - Maintain a list of messages for each "subscriber"
      - Assign each message a unique ID
      - Place all messages in a "queue" (keyed object) for the subscriber
        - i.e.

        ```javascript
        messages = {
          clientID: {
            rain: {
              messageId: { payload },
              messageId: { payload },
              messageId: { payload },
            },
            emergency: {
              messageId: { payload },
              messageId: { payload },
              messageId: { payload },
            },
          }
        }
        ```

      - Continue to broadcast messages as they arrive
      - Subscribers, upon receiving a messages will need to then send back a `received` event to the server, with the message ID
      - The server then removes that message from the subscriber's queue
      - Any messages that never get `received` by a subscriber are considered to be "undelivered" and simply stay in their queue
    - How does a client get messages in their queue?
      - At any time (usually at startup) a client can emit an event that would cause the server to try and "dump" the queue for a given event
      - The server simply does a loop over any messages in the event queue for that client
      - For each message in the queue, emit it to the client
      - If the client acknowledges receipt (as before), the message is dequeued
      - ... and so on
- **Experimentation and Discovery Ideas**
  - Commercial Queue Software and Services
    - AWS Services (there's a demo for)
      - [SQS](https://aws.amazon.com/sqs/)
        - [SNS](https://aws.amazon.com/sns/)
    - Software and other services
      - [RabbitMQ](https://www.rabbitmq.com) (free, but support is $$)
      - [Cloud AMQ](https://www.cloudamqp.com/plans.html) ($3500/mo - Hosted RabbitMq)
      - [BusMQ](https://github.com/capriza/node-busmq) (open source, uses reddis)

### TOPIC 2: DEMO

It's a good idea to do a quick tour of the AWS queues just to give some visibility into a "real" one

- One of the demos provided actually connects to both SNS and SQS.
- In order to cement the topic, it's instructive to start by demonstrating these
- The demo itself is pretty slim (don't write the code, but do this "code review" style)
  - The `aws` demo is well documented

Following the "here's how it looks in the real world" glimpse at AWS with our js code, build in some basic queue functionality into the chat server

Read and Practice this demo carefully, and multiple times. There's lots of moving parts, refactoring, and a lot of great talking points built in. The code is very well commented so the students have some good information to refer to. The [DEMO.md](DEMO.md) file is very verbose as it guides you through the points of note. Take the time to fully understand this, as this is likely one of the more high level concepts the students will encounter.

It's important to wire the demo code up as a more thoughtful engineering exercise so that the students can use it as their starting point.

## Use Cases and Examples

## Multiple Consumers

This all great if a message is only supposed to be processed by one consumer in one way. What if there are many potential interested parties.

- In this case, we use a Notification or Broadcast system
- Notification systems are setup to allow multiple "Subscribers"
- As a message is "Published" to a notification system...
  - It then broadcasts it out to all subscribers.
- When used in conjunction with a Queue, imagine many Queues (or other cloud infrastructure) subscribing to that same topic and responding esoterically
- This is known as enterprise scale pub/sub
- A queue's core job:
  - Manage clients
  - Listen for events
  - Broadcast valid events
  - Keep tabs on which clients have received the events
  - If a client goes "dark", replay the events in order (a queue) when they reconnect
- Our queue server will be built using a library to manage the above
- How can we handle those requirements?
  - Good opportunity to whiteboard some ideas with the students.
- What does a message queue architecture look like?
  - Draw an image similar to this, with the students to describe

## Queue Systems and Apps

Demonstrate and Browse actual Queue Software. Specifically, do a demo of the AWS SNS and SQL Systems with a quick node demo of how to connect.

> Lab today will be to replicate the functionality of these services

### AWS Queues

- [SQS](https://aws.amazon.com/sqs/)
- [SNS](https://aws.amazon.com/sns/)

### Queue Software

- [RabbitMQ](https://www.rabbitmq.com) (free, but support is $$)
- [Cloud AMQ](https://www.cloudamqp.com/plans.html) ($3500/mo - Hosted RabbitMq)
- [BusMQ](https://github.com/capriza/node-busmq) (open source, uses reddis)
