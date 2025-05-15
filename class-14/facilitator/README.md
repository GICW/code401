# Facilitators Guide: Events Module Final Project

## Overview

In this last class of the Event Driven Applications module, we'll be having the students explore events on their, by building a project of their own design, as a small group.

### How does this topic fit?

**Where we've been**:
To this point, we have explored event driven architecture through common Node.js events and more formal network event processing with Socket.io, as well as guaranteed (and ordered) delivery of notifications with a queue. Students should be familiar with the concept of multiple services communicating via events and payload through a common "hub"

**What are we focusing on today**:
In this class, students will form small groups and "get into the sandbox" with their new set of tools and create their own small scale event driven application.

**Where we're headed**:
This class concludes the Event Driven Applications block.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- No new concepts are introduced today, use the extra time to address class needs.

#### Ideas: 
  - Testing approaches for the week's labs or code challenges; reinforce TDD approach.
  - A deep dive into lab-13 code review. 
  - Prepare a reinforcement lecture or activity based on the data structure of the week.
  - Meaningful warmup or whiteboard exercise.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- The previous lab was to wire up Socket.io with standard events along with support for namespaces and rooms to divide the messages into groups and sub-groups, and a queue
  - Most likely, the rooms would present the largest struggle for them.
  - The queue itself should be reviewed.
  - Focus on how you ensure that vendors don't hear events intended for other vendors (Rooms).
- Review a solution the engineering goals regarding creating a generic `Client` library that was teased in the lab.

### TOPIC 1: Module Recap

- **Why** (5 min)
  - Make sure the students are solid on all concepts learned to this point.
- **What** (10 min)
  - Extensive code review with UML Drawings, student led discussions and a full rebuild.
  - Recap of testing methodologies.
- **Experimentation and Discovery Ideas**
  - Go around the class asking for one thing they learned well enough to teach.
  - Go around the class asking for one thing they don't understand and see if anyone can answer.
    - After the first round, you may find there's nothing not covered.
  - Have one person at a time add to a UML or Data Flow diagram on the board.

## Lab Notes

Assign your students to groups of 2-4 to work on todays lab assignment

You'll notice that in the LMS, the lab assignment is unpublished, so that you can assign your students to the "Lab 14 Student Groups" group in the LMS and then publish the assignment.

Today's lab will have the students in their own "sandbox" where they will be permitted to build anything they like, using the tools they've built so far.

## What might students struggle with today?

## Past bugs, issues or surprises...

## General Comments and Notes

When working with the observer pattern, students will find it highly useful to track the lifecycle of an event.  

Where it is first triggered?  Why? 

Options for how we can trigger an event programmatically.  

Where the event is initially observed and possibly relayed to a client and each successive sequence of observations and events 
