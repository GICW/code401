# Facilitators Guide: React Native

## Overview

We will be diving into a 2 day exploration into React Native and general mobile/device application development. The whole of this module is centered around the students teaching themselves new frameworks and development patterns, proving that they can "learn how to learn"

This class begins a 2-Session project where they will create a React Native application that uses device or hardware specific features for their phone.

> **Following these 2 class sessions, students will present their apps to the class prior to the start of Class 43.**

### How does this topic fit?

**Where we've been**:
To this point, students have been exposed all aspects of React application development, state management and styling techniques and should have a solid grasp on the basics of creating, developing, and running a small scale React web application.

**What are we focusing on today**:
Today, we'll be using all of that knowledge and having them create mobile applications using the React Native framework.

**Where we're headed**:
In addition to this assignment, during this learning module, students will also be teaching themselves Gatsby and one other non-React javascript framework.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are to gain a purer understanding of the differences between web and native applications, use of device features, device permissions, and other issues related to working within the constraints of both a smaller form factor and hardware restrictions.

## Preparation

- Setup expo-cli on your machine and work with a basic hello world app that runs from your local.
- Familiarize yourself with the [<http://expo.io]> online IDE and how they work similarly
- Have a good grasp of the Expo and React Native docs
  - What can you do on your phone?
  - How does security work?
- Build a full app and explain what goes inside
- Read up on what React Native really renders on the phone and how it works, what's actually native and what's not
- Get ready for questions about things like why we would choose this over a simple responsive website
- Look at previous course student submissions for insight as to what you might see in code review.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../LECTURE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

This is the beginning of a new module, there's no code to review, other than getting into lingering student questions about React in general.

### TOPIC 1: React Native

- **Why** (10 min)
  - Developing device specific apps is hard!
  - There are 2 competing platforms
    - iOS
    - Android
  - They have completely different SDKs and languages
    - Android: Java (a google variant)
    - iOS: Cocoa, Objective-C, and now Swift
  - Creating an app for both devices means maintaining 2 codebases
    - Not scalable
    - Not Easy
    - Not Cheap
- **What** (30 min)
  - Enter React Native and other similar frameworks
    - [Flutter](https://flutter.dev/)
    - [Xamarin](https://dotnet.microsoft.com/apps/xamarin)
  - Pros
    - Platform independent code (your code runs the same on all devices)
    - Easy to style
    - Comfort in using the languages and patterns you already know
    - Output is mostly device native components
    - Uses the device hardware and user settings
  - Cons
    - Limitations
      - Performance (they are native, but not machine language native like the core dev-kits)
      - Access
        - Some device specific things need to be coded in the native languages and "hooked into)
  - What is a "native" component
    - Consider this [`<input type="color">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
      - You code this in an HTML file. The browser sees it, interprets it, and then renders it they way that it sees fit.
        - Windows and Mac users see different color pickers
    - Devices work the same way. Users are very used to the way their phone buttons, select lists, dates, etc look and feel.
    - Native frameworks tap into that commonality so you don't have to.
    - Also, because things like buttons, fonts, choosers are part of the device itself, using them is extremely fast, and makes your application smaller because it can use what's already there.
- **How** (60-90 min)
  - Run an interactive demo that showcases the core concepts
    - Installing Expo
    - Creating a basic application scaffold
    - Writing, running, debugging the most basic of applications using Expo
    - Using the Expo documentation to tap into permissions for device features
    - Print a list of contacts
- **Experimentation and Discovery Ideas**
  - Open a discussion on what devices can do that your normal browser can't

## Lab Notes

> While not specifically required, this is a great opportunity to have the students work in pairs.

- The students will easily grasp coding in React Native
- Help them discover some of what their phones can actually do and how to tap into the hardware

### App Ideas

- NFC Sharing (contacts, songs, etc)
- Metal Detector using the magnetometer
- Shaking, Motion and Impact detection ("ouch" when dropped or "whee!" when flipped)
- Use the step counter in fun ways
- Use GPS in fun ways (buzz when your friends are close)

## What might students struggle with today?

- What'll take them some time to get stable with is the development environments and workflows.
- Setting up their IDE and simulators (Android Studio in particular) can be a pain point

## Past bugs, issues or surprises...

## General Comments and Notes
