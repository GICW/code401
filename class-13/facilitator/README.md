# Facilitators Guide: Message Queues

## Overview

The last lecture for this module, we'll be introducing the concept of Messaging Queues, where the server is capable of not only broadcasts messages, but managing receipt. In this class, we'll be exploring ways to "Queue" messages for guaranteed delivery

### How does this topic fit?

**Where we've been**:
To this point, we have explored event driven architecture through common Node.js events, simulating network events using TCP, and more formal network event processing with Socket.io. Students should be familiar with the concept of multiple services communicating via events and payload through a common "hub"

**What are we focusing on today**:
In this class, we will be talking about Queueing, and deeper issues around Pub/Sub architecture. Specifically, the need for a Queue server whose job it is to deliver messages to "hold on" to messages that are not delivered to all subscribers. In fact, in this type of architecture, we can flip the responsibility to the clients to poll the server for new messages.

**Where we're headed**:
This class concludes the Event Driven Applications block. Your final demo (in this class) will be to move our chat application (Slick) into multiple rooms and direct messages using a Queue. This will make it feel more like Slack, in that if you re-join a room, any messages you may have missed will be shown to you (they are managed in a queue)

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Re-Acquaint yourself with the Stacks and Queues DSA Material, we'll be using them in this demo/lab

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- The previous lab was to wire up Socket.io with standard events as well as to add support for namespaces and rooms to divide the messages into groups and sub-groups
  - Most likely, the rooms would present the largest struggle for them.

### TOPIC 1: Message Queues

- **Why** (5 min)
  - Real Time events serve a very specific and useful set of purposes
    - Distribute Processing
    - Separate Concerns
  - There are issues with "Real Time" that might not seem readily apparent
    - Events are not guaranteed to be processed in order received at the hub
      - Often times, order is important
    - Events broadcast by the hub are not guaranteed to be received by all subscribers
      - Network issues can arise
      - Client systems can go offline and messages could be missed
      - Some subscribers must receive 100% of all messages to properly function
- **What/How** (45 min)
  - Message Queues to the rescue
  - A Queueing server answers the above concerns by implementing delivery logic
    - Unlike our event hubs, a queue can't just be a switchboard operator, it has to manage the subscribers
      - The Message Server needs a list of the subscribers and which event/queues they subscribe to
      - It has to track every message to know if it was delivered or not
    - It will attempt to immediately broadcast messages as before
      - But it will track receipt by all subscribers
      - Maintain a list of undelivered messages to any subscriber not receiving a message
    - Clients can make a "pull request" of messages
      - Can be done automatically on connection to the server (dumping the queue)
      - Or with an explicit request of all messages
      - Or, as an ordered list, one by one (`.next()`, ...)
  - So, how does all of this work?
    - Most of the work we've done to this point has been on the client end, as the servers have been largely re-broadcasting the same messages, acting as a "dumb hub"
    - We will now need to strategize on the server side
    - Maintain a list of messages for each "subscriber"
      - Assign each message a unique ID
      - Place all messages in a "queue" (keyed object) for the subscriber, based on the event
      - Continue to broadcast messages as they arrive
      - Subscribers, upon receiving a messages will need to then send back a `received` event to the server, with the message ID
      - The server then removes that message from the subscriber's queue (i.e. it was 'delivered')
      - Any messages that never get `received` by a subscriber are considered to be "undelivered" and simply stay in their queue
    - How does a client get messages in their queue?
      - At any time (usually at startup) a client can emit an event that would cause the server to try and "dump" the queue for a given event
      - The server simply does a loop over any messages in the event queue for that client
      - For each message in the queue, emit it to the client
      - If the client acknowledges receipt (as before), the message is dequeued
      - ... and so on
- **Experimentation and Discovery Ideas**
  - Commercial Queue Software and Services are big business!
    - AWS SQS and SNS, Azure Event Hub, RabbitMQ

### TOPIC 2: DEMO

> [Demo](DEMO.md) a basic queue

Read and Practice this demo carefully, and multiple times. There's lots of moving parts, refactoring, and a lot of great talking points built in. The code is very well commented so the students have some good information to refer to. The [DEMO.md](DEMO.md) file is very verbose as it guides you through the points of note. Take the time to fully understand this, as this is likely one of the more high level concepts the students will encounter.

It's important to wire the demo code up as a more thoughtful engineering exercise so that the students can use it as their starting point.

## Lab Notes

In the previous labs, we did a fully automated simulation of a delivery service application, where every few seconds a "vendor" application would emit an event to have a package picked up, a "driver" application would simulate a "pick up", send an "in-transit" message and then a "delivered" message a few seconds later.

This was a good look at the end-to-end operation of a real logistics tracking system.

In this lab, we're going to have student focus in on just the "delivered" part of this, and take out the automation.

The "vendor" applications will run, but will only be responding to "delivered" messages now. They will subscribe to a queue in the hub server, so that they can get any missed messages when they go offline.

Instead of a delivery app, students will build an express server with one route, which simulates the driver scanning a bar code on delivery. When the route is hit, it'll fire the `delivered` event to the hub server and the vendor's queue gets filled and the message broadcast.

This is the same problem domain that they've been working with, but with a more real world approach.

## What might students struggle with today?

- This is a big mental jump for the students from a simple event driven app into a more robust architecture with multiple services.

## Past bugs, issues or surprises...

## General Comments and Notes
