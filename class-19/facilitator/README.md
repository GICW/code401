# Facilitators Guide: AWS: Events

## Overview

AWS Simple Notification Service (SNS) and Simple Queue Service (SQS) are 2 messaging services operated by AWS that allow us to do "real time" messaging in the cloud, similar to Web Sockets or Socket.io

### How does this topic fit?

**Where we've been**:
In the previous class, students completed work on a Cloud API, using Lambda, API Gateway and DynamoDB

**What are we focusing on today**:
Today, we'll be working with SQS and SNS, AWS's 2 dynamic messaging services.

**Where we're headed**:
This will complete the Cloud Computing module

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to see how real time messaging works in the cloud, at scale. Additionally, it's important to see the differences between real time messaging and queues, as well as push notifications vs subscriptions.

## Preparation

### Bookmark

- [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
- [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

- Practice the demos. You'll be wiring up a couple of services and running multiple node applications in the live demo today. As with node events, this can get confusing as there's many publishers and subscribers at play at the same time.
- Practice a good drawing on the data flow of a message, especially when we get to the point where Node is triggering an SNS notification that triggers an SQL Queue, which can be "heard" by a separate client. It gets confusing, so having a great visual is going to be key

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../LECTURE-NOTES.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

Code review will likely boil down to another architecture discussion. The joy of serverless/cloud architecture is that there's not a lot of monolithic code to meander through. The downside, of course, is that there are lots of virtual connections to manage.

- Remind students that AWS services are not free. As we demo each class in this series, remind students to delete the services they created following receiving their grades.

### TOPIC 1: SNS

- **Why** (5 min)
  - Communicating in real time between services is essential to building a distributed system
- **What** (10 min)
  - SNS works a lot like socket.io and web sockets.
  - SNS acts as a central hub and in response to inbound messages, will **push** messages back out to all subscribers
  - **Messages are not guaranteed to be delivered**
    - Subscribers must be connected to SNS in order to receive messages
    - If a client is disconnected, they will miss out on the push notification
  - SNS will generally push to all subscribers
    - However, a message can be designated for only selected subscribers, by specifying a `targetArn` in it's context
    - For example, a delivery notification just for a particular client
  - Each "Topic" in SNS is akin to an event name in NodeJS/Socket.io vernacular
  - Each "Subscriber" in SNS is akin to client apps that were connecting to socket servers and listenting for certain events
  - In the cloud world, every topic/subscriber is a separate bit of code/logic, which can be a lot to manage, but ultimately, everything is very focused (Single Responsibility)
- **How** (30 min)
  - Live Demo
    - Create a topic
    - Create an SMS subscriber
    - Create a lambda subscriber
    - Publish messages and see text messages and lambda logs on the same topic

### TOPIC 2: SQS

- **Why** (5 min)
  - Realtime messaging (SNS) is great, but delivery isn't guaranteed
  - SQS creates a queue of messages, along with a delivery/notification protocol that ensures every message is delivered
  - Ordering may also be important, so FIFO is an option
- **What** (10 min)
  - Like SNS, Queues are setup by name and can be subscribed to, by `arn`
  - Unlike SNS, SQS does not do push notifications.
  - Messages are "queued" for delivery
  - Subscribers must connect, fetch, and delete messages that are waiting for them
  - Standard Queues are meant for a single consumer, unlike SNS which can broadcast
    - This is a bit of a limitation, but guaranteed delivery demands this
    - How can we overcome this?
      - More Queues? More topics?
  - FIFO Queues can be used by multiple consumers
- **How** (30 min)
  - Demo
    - Create a queue and pub/sub using only NodeJS
    - Connect the queue to a topic to show a different way to queue a message for a client

## Lab Notes

Lab will have students replicating the CAPS system, but in the cloud. They should be quite familiar with the problem domain, but wiring, as with everything at AWS can be a challenge

Given that queues are specific to a client, it would seem that each "Vendor" in our application would have a queue so that as drivers deliver, their notification only goes to the right vendor.

Similarly, pickup messages can be stored in a FIFO queue, and multiple drivers can pull from the queue, one message at a time, so that they each only get the next one in sequence.

## What might students struggle with today?

## Past bugs, issues or surprises...

## General Comments and Notes
