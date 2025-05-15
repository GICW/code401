# Facilitators Guide: AWS: Serverless API

## Overview

AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers. We'll use it today to automatically run some processing on image files after they're uploaded to an S3 Bucket

### How does this topic fit?

**Where we've been**:
In the previous class, students were exposed to Cloud computing by deploying a simple NodeJS application to EC2 using Beanstalk. To this point in the course, students have hand built NodeJS/Express APIs, Authentication Systems, Event Driven Services and interfaced with Databases (Postgres and MongoDB)

**What are we focusing on today**:
Today, we'll be beginning our transition from full, deployed applications into the world of serverless computing using Lambda functions and storage buckets.

**Where we're headed**:
We will be replicating the full API stack in our next class, bringing in the AWS API Gateway and an AWS Database

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are ... to get the students familiarized with the AWS ecosystem, understanding what a CDN is, and triggering code (Lambda) to run from a disconnected service. This a major leap of trust for the students. Spend the majority of your demo time in the AWS console, getting the class familiarized with the general layout and operations of AWS

## Preparation

- Be comfortable moving around the AWS ecosystem
- Practice your Lambdas!
  - The demos have you building 2 simple functions, one of which interfaces with S3

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../LECTURE-NOTES.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Review student EC2 applications and talk through issues that they faced in getting things to properly deploy
- Remind students that AWS services are not free. As we demo each class in this series, remind students to delete the services they created following receiving their grades.

### TOPIC 1: Serverless?

- **Why** (5 min)
  - This is "the way" modern applications are built and distributed at scale
  - All cloud providers use this paradigm
    - Majors: AWS, Azure, Oracle
    - Minors: Heroku, Render.com, Digital Ocean, Netlify, Vercel
- **What** (10 min)
  - There actually servers ... but they're tiny and highly distributed
    - These are containers, similar to EC2, but more efficient and distributable
  - If you're not running a full app in an EC2 container, what you're probably running is a tiny bit of code that only needs to run sometimes
  - In response to any server event, code can run
    - Database record CRUD operation (before, during, or after)
    - File uploads
    - Emails received, SMS Sent
  - Can you imagine maintaining an application that had to manage 100% of the use cases?
    - We call these "Monoliths" ... millions of lines of code that has to deal with the totality of things that can happen
    - Slow to deploy
    - Impossible to manage
    - Tough to keep secure
    - Huge companies thousands of developers all have to be in sync
  - The solution?
    - Micro applications, called "Lambda Functions"
    - Highly Targeted
    - Completely Modular
    - Deployed as needed, at scale
      - Busy functions are spread all over the cloud
      - Less used functions are kept on fewer servers
    - They only run during the instant they are needed
    - You are only charged for the duration of each "function call" instead of 24x7 like a normal server
- **How** (30 min)
  - Complete Demo 1, making a very basic Lambda function that adds some numbers
- **Experimentation and Discovery Ideas**
  - Thing

### TOPIC 2: S3

- **Why** (5 min)
  - Files need to live somewhere!
  - Whether its Lambda function code or cat pictures, everything is a file
  - Websites, developers, and users need immediate, fast access.
  - Used to be 1 second to get a file was acceptable. Today? .1 second is considered slow.
- **What** (10 min)
  - AWS has millions of servers and virtually unlimited storage
  - They've built an amazing system of computers with hard drives all over the globe
  - S3 (Simple Storage Service) is your on-ramp to storing your files on the AWS network (The Cloud)
  - Once on a home drive, your files are distributed around the globe, creating a CDN
  - CDNs put files on server farms closer to each user so their access time is fast.
    - As a user requests a file from AWS S3, AWS first looks on the server closest to the user (i.e. in the same city).
      - Is the file there?
      - If it is, send it to them.
      - If not, get it from the root server (might be in a different company)
        - Give it to the user
        - Save it on that "close" serve for next time
        - Now, any time any user in that area wants the file, it's there!
  - Not only can we store files on the AWS network, but we can write code that interacts with them.
- **How** (30 min)
  - S3 Demo
    - Create and use a bucket, public and private
  - Lambda Connection
    - Trigger a Lambda on all file write operations
  - Demonstrate that 2 seemingly disconnected services can operate jointly using event triggers
    - Eventing is extremely powerful
      - When "this" happens ... Run "that" code
- **Experimentation and Discovery Ideas**

## Lab Notes

- Remind students that the lab might set them up in an infinite loop! Uploading to S3 triggers a lambda that updates a file in S3 which could go on forever. They need to setup their S3 trigger to only operate on image files!
- Students will need do some research to get through their lab assignment
- **GitHub Deploy to Lambda** -- there's few GitHub marketplace actions that can be used for this

Encourage the students to spend time in documentation and following instructions. AWS has notoriously difficult documentation. Students must spend some cycles here getting around in it as this is a MAJOR part of their dev life

## What might students struggle with today?

- AWS Documentation
- Architecture and Wiring

## Past bugs, issues or surprises...

## General Comments and Notes

### CDN

![CDN](./assets/cdn.png)
