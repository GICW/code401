# Facilitators Guide: Socket.io

## Overview

Today we will explore the basics of networking by introducing students to the TCP protocol. Building on that, we'll use the Socket.io library which provides the ability to communicate with events over the network using both server-to-server channels as well as browser clients in the same pool.

### How does this topic fit?

**Where we've been**:
In the previous class, we focused on "Event Driven Applications", specifically a single app, written with Node.js. Events are great in a large application that needs to monitor all sorts of actions and activity. But what of the cases where other systems might also want to monitor things that happen in (or emanate from) our application

**What are we focusing on today**:
Today, we'll be writing much more readable event code that properly runs over a network. Like we previously did with Express, in this lab we'll be using a 3rd party library: Socket.io to accomplish the task of writing a true event driven system over a network.

**Where we're headed**:
Wrapping up the Events module, the next class will have students using Socket.io with some custom wrappers to add functionality to their delivery system application, allowing for queued notifications.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Get acquainted with TCP and UDP, as you'll want to deliver a great pre-lecture and drawings on how networking actually works
  - This will set the students up well to use socket.io to build a network and understand what's happening
- Practice building a basic socket.io server and client
- Practice with Namespaces
- Practice the Socket.io demo, focusing on the networked aspect and how similar it is to native node events

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Students typically will need a good code review on one of the following topics
  - Full incorporation of the object/event API that they're hand-building and their old Validator library
  - Integration and End-to-End tests
  - Mocking

### TOPIC 1: TCP Networking

- **Why** (5 min)
  - How does the internet actually work?
    - (this question never stops being asked, and has no final answer!)
  - Gaining an understanding of what's happening "on the wire" as requests happen will really help us to write more thoughtful, efficient code.
  - Knowing what's possible, what's difficult, and how things work will give us a broader view over what types of applications we can write
    - ... and what we can't
- **What - TCP** (30 min)
  - TCP, like HTTP is a transfer **protocol**
  - Reminder: What is a protocol? (A set of rules governing the transference of data)
  - TCP is a 3 step handshake process where 2 computers have a short "conversation" and setup the transfer of data
  - Data is transferred as a `<buffer>`, in small chunks from one machine and re-assembled on the receiving machine
- **How** (done along with, and in support of, the "what" topics above)
  - Use an interactive drawing to illustrate how this looks
    - A pile of sand being moved from one point to another a spoonful at at time is a good visual
  - Real World Examples
    - Uploading files to a server
    - Netflix (the client (your tv) assembles that data as it gets it, not when it's all done)
      - This is how "streaming" works, and often while you'll see the "buffering" icon if something above is wrong

### TOPIC 2: Socket.io

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
- **How** (45 min)
  - Interactive Demo -- `demo/basics`
    - This is a quick demo of Socket.io to demonstrate the simple connections between servers and clients
- **Experimentation and Discovery Ideas**
  - Come up with your own more interesting problem domain if you choose.

### DEMO: `body`

The main coding demo will be a refactoring of the body simulator application, but using Socket.io into a killer, modular socket based application. Having the students install the various body part apps on their machines will allow them to see their own machines responding to your events over the network

## Lab Notes

Students will be building a small stand-alone application that mimics a package delivery system, using socket.io to showcase how the different parties (vendors, delivery drivers) can all be aware of the state of a package in real time, using events.

The actual code is relatively small, but there are many moving parts, so student might find themselves swimming a bit.

## What might students struggle with today?

- Testing Socket.io using a mock can be difficult.
- Remind students to write modular code and focus on unit testing, not integration testing

## Past bugs, issues or surprises...

## General Comments and Notes

## Images

### OSI Model

![OSI](./assets/osi.png)

### TCP/IP Example

![TCP](./assets/tcp-ip-example.png)

### TCP/UDP

![TCPUDP](./assets/tcp-udp.png)

### Web Sockets

![Sockets](./assets/web-sockets.png)

![socket.io](./assets/socket-server-connection.png)
