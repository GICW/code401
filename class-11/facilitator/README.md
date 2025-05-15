# Facilitators Guide: Event Driven Applications

## Overview

Today, we will leverage the ability of Javascript to raise events, monitor events, and perform operations in response to events occurring. We'll be diving into thinking in a non-linear fashion, writing code that is meant to run out of sequence, and in response to things happening, rather than just a straight down execution.

### How does this topic fit?

**Where we've been**:
This starts a new module on the topic of event driven application development. In previous courses, students have used events in the browser to handle clicks, filtering, etc. The basic concept of code happening when an event occurs will not be foreign to them.

**What are we focusing on today**:
Today is all about event driven development. We will be using the NodeJS built-in event module to wire up some basic events. We will explore ways to emit events from one part of your code, and have another piece of code waiting for that event to happen and then running when it does.

**Where we're headed**:
The next class will continue focusing on events, but we will change the implementation from using Node events, which are limited to being able to respond within the same running application to using TCP to emit events over the network, so that code on many servers/machines can emit and respond to each others' events.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

Understand how the core node `events` module works.

You'll need to dive into the notion of a "Singleton" today in order to have multiple modules share the same event pool. Study the demo notes on how to make this clear.

- Practice the event demos
  - Start by coding out the monolithic version
  - Then, refactor that into modules
  - Focus the students on how you can make code (functions) run without directly calling them

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- We're at the start of a new module, so there's no code to review related to this content
- There was a new data structure introduced at the end of the last module, so use your code review time to review that.
- This is also a good opportunity to do a pop-quiz, white board session, or something else to help demonstrate to the students how much they've learned to this point.

### TOPIC 1: Events & Event Driven Apps

- **Why** (5 min)
  - Applications, just like the real world, aren't always "linear" or "top down"
  - In the world, we respond to events, and our code can (and should) as well.
    - Do you squint in response to bright light?
      - How do you suppose your brain and body do that?
    - Code can also "just run" when certain conditions occur
- **What** (10 min)
  - Dive into a few obvious and non-obvious event examples
    - Start with some "life" examples, but move into code
    - Explore the notion that event driven code is ready and waiting to respond to things that happen
    - `button.addEventListener('click', function() { })`
    - `$('.buyButton').on('hover', makeNoise)`
    - `app.get('/location', (req,res) => {})`
  - In the first 2 examples, the browser is waiting for a user to take an action.
    - In conversation "When this event happens on this thing, run this function"
- **How** (30 min)
  - Create an app, visually on the whiteboard, or by taking notes
  - Take student ideas for building an event driven application
  - What is the purpose of the app?
  - What events might it be important to notify other code about?
  - What other parts of your app might want to know and respond?
  - What code do you wish you could write to do this?
- **Experimentation and Discovery Ideas**
  - Turn your class into an event driven app.
    - It's fun to give students index cards with words on them before class begins
    - Whenever the thing on their card happens, they have to stand up and say something
      - i.e. When you say "jQuery" or when you mistype something, or if a siren is heard outside, someone has to stand up and clap their hands

### TOPIC 2: Node.js Events

> *"Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called."* - Node.js Event Documentation

- **Why** (5 min)
  - In the browser, we have the DOM as well as jQuery to help us wire events
  - That's purely visual, though ...
  - On the server side, where we're using Node.js, we would like a similar system, but based on data changing
  - Because Javascript is natively Asynchronous, Node.js is largely build around events
- **What** (10 min)
  - The developers of Node.js have exposed the events API for developers to use in their apps
  - Events are emitted ("fired", "triggered") by name
    - Emitted events can optionally carry data, often called "payload"
      - `events.emit('light', {level:'reallybright'})`
  - Event Listeners wait for ("subscribe to", "listen for", "monitor") events by name
    - When the event happens, they run a callback, which is given the "payload" from the event that fired
      - `events.on('light', (payload) => squint(payload) )`
  - With Event Driven Code ... you are able to "call functions" without having to actually call them
- **How** (30 min)
  - Use an interactive demo to build an event driven system using Node events
  - Build a monolithic version (one file)
  - Refactor into a modular system
    - This will force you to use an event module that exports a singleton
- **Experimentation and Discovery Ideas**
  - The demo is a very simple CRUD emulator which hits the lecture points

## Lab Notes

- Students will do a full wiring of an event system.
- They will be given a simple one-file system (like what you start with in the lecture) and tasked with:
  - Modularizing it
  - Using an events module to encapsulate the node events instance
  - Creating subscribers that can consume any message sent
  - Creating a library of common event responders
- This is mainly moving things around and extending a system. Should go far in getting their hands dirty.

## What might students struggle with today?

- Students will definitely struggle getting events to fire and be heard after they've modularized.
- Race conditions are common
  - Did they export the events instance?
  - Do their modules simply "run" or do they have exported methods?
    - If they "just run", likely they're going to finish before other modules are loaded.

## Past bugs, issues or surprises...

## General Comments and Notes

- Use words like "Event Queue" when talking through this. We're going to be building one at the end of this module, so getting that terminology embedded at this stage is foundational to the stacked learning process.
- Continually talk through "what code is listening" and "what code is sending" and "when do we need to handle that" when talking about the lifecycle of an event.
