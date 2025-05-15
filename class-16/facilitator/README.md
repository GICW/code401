# Facilitators Guide: AWS: Cloud Servers

## Overview

Today, we begin our Cloud Computing module, which will take students through AWS services that match what they've developed on their own to this point of the course:

- Node Servers deployed to EC2, through Elastic Beanstalk
- Lambda Functions and S3 Storage Buckets
- Serverless APIs, using API Gateway, DynamoDB, and Lambda
- Event Driven Apps, using AWS SNS and SQS services

### How does this topic fit?

**Where we've been**:
To this point, students have created Express Web, API, and Authentication applications as well as event driven services.  The core concepts should be solid.

**What are we focusing on today**:
Today, we'll be introducing "The Cloud", including its architecture, underpinnings, and will be using one AWS service (EC2) to deploy a hand built server.

**Where we're headed**:
Next class will focus on Serverless architecture and event triggers in the Cloud as we wire up a Lambda function that "hears" uploads to S3 Buckets and can then perform operations.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are  to get students acquainted with the cloud as a concept and more specifically, AWS operations, usage and features

## Preparation

- Ensure that your `aws` and `eb` CLI tools are installed and configured with your AWS keys.
- Create and tear down EC2 instances at AWS.
- Create and deploy a node application through Elastic Beanstalk both from the UI and the CLI.
  - Be able to map what's happening in the CLI with what you see on the AWS dashboards.
- Get ready for questions about the cloud. This is magic.
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the demo.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-NOTES.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- No official code review today. However, the readings included many new concepts related to Cloud Computing, EC2, etc. Use this early time in class to go over the reading assignment questions and comments and see where students are most intrigued. This is a great way to set up lecture.
- Remind students that AWS services are not free. As we demo each class in this series, remind students to delete the services they created following receiving their grades.

### TOPIC 1: The Cloud

- **Why** (5 min)
  - AWS and Azure are dominating the way that we do computing in today's world
  - Let's explore what they're doing and why it's relevant and what problems it solves
- **What** (10 min)
  - In the "old days" (like 10 years ago), we deployed websites on servers (actual machines)
    - If your website was really popular, one server could not handle the load, so we added more
      - This is called "Horizontal Scaling"
      - Generally machines can't handle load not due to memory/hdd, but in cpu usage
    - But how do we make sure that each server gets 50% of the traffic? Load balancing
    - This is fine, but the problem gets exponentially more difficult as things get bigger
      - Databases on 2 machines can't stay in sync
      - What about 4, 5, 100 machines?
      - How can we make it fast for someone on a different continent?
  - The Cloud attempts to solve these problems using "Virtual Machines" at "Scale"
  - What is a "Virtual Machine"
    - It's essentially an application that emulates an operating system, but using your hardware
    - You can run multiple "VMs" on one physical machine.
    - For example, if your machine has 32GB of RAM and 1TB of Hard Drive ...
      - You can segment your machine and run 8 Virtual Linux Machines with GB RAM and 128GB Hard Drives
    - With special software, called a "Hypervisor", you can dynamically "load balance" them easily, allowing one machine to handle 8x the traffic it used to.
    - This same software can load balance VMs of the same type over many machines
  - In the cloud, your code can scale up to any level needed.
    - Instead of building and managing hundreds of servers and only needing them during your busy seasons, imagine that you could have one base server, and as your application traffic gets heavy, servers automatically "spin up" to handle the load, and then "spin down" when it slows down
    - This is the magic of horizontal scaling in the cloud. From second to second, your app is running on 1 server in one country, to thousands of servers around the planet, and you only pay for the number of seconds each VM is running!

- **How** (30 min)
  - Many VMs (Virtual Machine)  can run on one physical machine
    ![VM](../assets/vm.jpg)
  - Hypervisor software manages and scales these as needed
    ![Hypervisor](../assets/hypervisor.jpeg)
  - A Blade Cluster has up to 32 Slots each with up to 4 computers (each of which is 10x more powerful than your laptop), capable running hundreds of VMs on each
    ![Blade](../assets/cloud-1-blades.png)
  - Blade Clusters live in racks that can generally hold 4-6 Clusters
    ![Cluster](../assets/cloud-2-racks.jpg)
  - Server Farms hold many, many racks
    ![Hallways](../assets/cloud-3-hallways.jpg)
  - Server farms are huge -- many football fields in size, and many (many) floors deep
    ![Farms](../assets/cloud-4-farms.jpg)
  - And they're all over the world. Millions of servers, Billions of VMs
    ![World](../assets/cloud-5-world.png)

### TOPIC 2: Deploying Code to the AWS Cloud

- **Why** (5 min)
  - We want our server to work in the cloud, not on one server!
- **What** (10 min)
  - We will use the AWS **EC2** service to deploy an "instance" of an operating system
    - Effectively, this is a VM on one blade in one rack in one building
    - We can tell AWS to "auto scale" or leave it as is
    - Once created, there's not an easy way to upload or manage your code, though
  - It's really hard to manage these. AWS is powerful, but not not very accessible
    - And they know it
  - Enter **Elastic Beanstalk**
    - Beanstalk gives you great defaults and a nice point and click interface that lets you upload your code easily, identify the kind of machine you want and start your server.
    - It knows how to install node modules and read package.json files
- **How** (1 Hour)
  - Build an interactive demo showcasing the deployment of a simple express server to EB
  - Do this both in the AWS GUI and from the Command Line
  - Highlight all of the services (Beanstalk, EC2, S3) that got used
  - Note that it did all the work (`npm install` and `npm start`)
- **Recap**
  - Does this remind you of anything?
    - Many cloud service/hosting providers present an easy to use wrapper around AWS, making things that are traditionally very hard to use, very easy to use. That's their business model.

## Lab Notes

- Relatively easy lab today, students will be installing node servers to EC2, using Beanstalk.
- Encourage them to try things like their Auth Server, Socket Server, etc.

## What might students struggle with today?

- AWS Documentation and UI/UX --- tough system to navigate the first time

## Past bugs, issues or surprises...

As of Tuesday, June 6th, AWS GUI deployment no longer  **automatically** generates the necessary roles for Elastic Beanstalk and EC2 deployment success and presented with some other unexpected permissions issues.  

### Troubleshooting Tips:

  - If CLI permissions do not play well with the `eb cli` tool, allow `AdministratorAccess` permissions instead of `AdministratorAccess-AWSElasticBeanstalk` to the user or group in IAM.  A bug existed managing updates and would not allow some errors without full administrator access on 6/6/2023.  
  - Permissions not updating required a full system restart for some windows users.  This occurred when they tried CLI deployment, saw permissions errors, and added correct permissions
  - Deploy using  `eb cli` first.  during their `eb create`, students will be asked if they would like to automatically generate roles.  Answering yes will auto generate their necessary roles for Elastic Beanstalk and EC2. These same roles will then be automatically populated in the correct places when they next deploy using the AWS GUI.  
  - During `eb cli` deployment, answering no for CodeCommit, SSH, and Spot Fleet is the path of least resistance and will offer highest rate of deployment success since a yes answer on these three services requires additional setup.

## General Comments and Notes
