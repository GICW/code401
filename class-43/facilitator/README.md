# Facilitators Guide: Gatsby, next.js, and other JS Frameworks

## Overview

Thus far, we've explored React as our main Javascript rendering library ... but there are many more. We'll be looking at 2 React frameworks today: Gatsby and next.js.

This begins a **2 day assignment** where the students will build a small portfolio site using Gatsby and additionally work with a partner to rebuild Salmon Cookies using a totally different framework (such as Angular or Vue)

### How does this topic fit?

**Where we've been**:
Students have a solid working knowledge of React application development as well as React Native.

**What are we focusing on today**:
Today, we'll be looking at 2 React frameworks, primarily to show students how to approach something totally new, by reading the docs and executing through tutorials. We want students to see a process, not necessarily code

**Where we're headed**:
This marks the final lecture and lab for this module. Students will be executing 2 labs on back to back coding sessions where they'll build out an application using Gatsby and a randomly assigned framework.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are for students to gain confidence in their ability to learn new frameworks (and possibly languages) and be productive in them in very short order. This is a huge confidence builder!

## Preparation

- Read up on next.js and Gatsby
- Get ready for questions about pros and cons of SSR vs SPAs
  - What are some use cases for each?
- Look at previous course student submissions for insight as to what you might see in code review.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../LECTURE-NOTES.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

> The "Code Review" portion of class should be spent with student presentations

Students will be presenting their React Native apps today at the start of class. Give each student 5-10 minutes to showcase their application and talk about their dev process and experience. It can work well to have them present their Expo QR code for all of their classmates to play with the app they built. Alternatively, you can have them display their phone app through their computer on the projector

### TOPIC 1: SEO and Server Side Rendering

- **Why** (5 min)
  - If nobody can find your website, does it exist?
  - Not everything on the web is an app like we've been building
  - Blogs, News Sites, Information Sites, and the like are 90% of the internet
  - How do people find you?
    - Google
  - How does google work?
    - It does (essentially) a superagent call to your website
      - It assesses what the page is about by looking at the words in your HTML
      - It follows every href, and repeats the process, forever
      - This is called "indexing"
    - If the HTML that comes to google is empty (like a React app is), Google cannot "index" it
    - And your gift for writing great React? When people search for words related to your website, they will not find it on Google
- **What** (10 min)
  - React is great, but the actual raw html source is empty, which can be a problem if your site is content based
  - So, the answer is to have your site loaded with actual HTML from the server
    - Just like in Code 201
    - Just like in Book App in Code 301
    - This is how PHP works, and many other "Server Side Rendered" technologies
  - In normal React, this is not possible without help
- **How** (30 min)
  - Enter Gatsby and next.js
  - These are frameworks that allow you write React just like you do now
  - They have development servers just like React
  - They have a build step just like React
  - The difference, however is that they both fully render your app and content before it gets to the browser for rendering.
    - **Gatsby** actually pre-generates `.html` files that are fully content loaded, just like you would have written by hand
    - **next.js** can pre-generate `.html` files as Gatsby, but it can also run in "server" mode and dynamically create the full html and send it to the browser, like EJS pages
- **Experimentation and Discovery Ideas**
  - Load a React app (code sandbox is fine) and view the actual raw source code.
    - There's nothing there, just `<div id="root"></div>`
  - Create a demo app using `next.js` and witness (even in dev mode) that the raw content is there
    - You can additionally run a build and view the raw `.html` files with content
    - Even the links to each page are re-drawn from the server, and come with content
    - In the browser, you can still operate as a SPA
  - Visit the Gatsby docs and see how it can have the same result, but through it's own means.
    - Students will execute a lab that requires them to use Gatsby...

### TOPIC 2: Alternate Frameworks

- **Why** (5 min)
  - Historically, there are dozens of frameworks for website development
  - What's a framework?
    - An opinionated set of rules you must follow as a developer
    - A fixed pattern
  - Pros
    - Developers that are well versed in a framework can be easily hired, trained and integrated
    - Frameworks with a common source are maintained and improved on as a community
    - Add-ons, docs, and help are abound
  - Cons
    - They can lock you in to a single approach
    - As a developer, your wider skillset can wane or stagnate
  - Reality
    - Your employer will likely use more than one framework in more than one language
- **What** (10 min)
  - React is technically a library, not a framework
  - Redux is a framework used within React apps
  - There are 2 major competing SPA frameworks/libraries currently
    - Angular (built by Google)
    - Vue (Independent)
  - There are may full stack frameworks, each with strengths
    - Ember
    - Meteor
    - Knockout
    - Laravel (php)
    - Zend (php)
    - Ignite (php)
    - Ruby/Rails
    - Spring
    - .net MVC
- **How** (30 min)
  - Demo AngularJS (v 1.7)
    - This is a great case study in a framework that truly changed the game
    - It evolved into Angular, React, and Vue

## Lab Notes

Students will have 2 labs to complete over the course of 2 sessions

- Strongly suggest that students spend their time wisely:
  - 2 hours per session working on the solo project
  - 4 hours per session working with their group on Salmon Cookies
  - They should negotiate with their group on scheduling

1. Personal Portfolio Site, built in Gatsby
1. Group Assignment: Salmon Cookies
   - Put students into pairs (or quads) and assign them each a different framework.
   - The lab assignment will be to re-create Salmon Cookies using their assigned framework

Frameworks to assign (use others you're familiar with if your class is too large)

- [Vue](https://vuejs.org)
- [Angular](https://angular.io)
- [Meteor](https://meteor.com)
- [Ember](https://emberjs.com)
- [Polymer](https://www.polymer-project.org/)

If you're feeling adventurous ...

- [Laravel](https://laravel.com/) (php)

## What might students struggle with today?

## Past bugs, issues or surprises...

## General Comments and Notes
