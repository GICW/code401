# Facilitators Guide: Data Modeling

## Overview

In this class, we'll be exploring data modeling. Students will have had some introduction to the concept as far back as 201, but now we'll start to look at this topic from a more engineering standpoint. Specifically, we'll be creating data models that not only shape and describe data (using schemas), but also perform the core CRUD (Create/Read/Update/Delete) operations, and allow room for applying business logic.

### How does this topic fit?

**Where we've been**:
To this point, the students have built a fully functional REST API with Express, but with a simple sequelize model being used directly by the router.

**What are we focusing on today**:
Today, we turn their attention to more deep data modeling, using more SQL (via Sequelize). They'll use a `Collection` class to support generic CRUD and validate input as necessary for relational application data using either the sequelize `hasMany()` and `BelongsTo()`methods to associate models with a One-To-Many relationship or a join table using two `belongsToMany()` methods to associate models with a Many-to-Many relationship.  Feel free to show both relationships if time and student bandwidth allows.

**Where we're headed**:
This class concludes the REST API Module

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice the demos
  - Basic Sequelize schema creation and operation
  - Understand how join tables and SQL try to keep things relational.
  - Writing tests using sequelize and sqlite in memory.
    - The tests will just create in memory SQL tables and records.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

The previous class was a big API build, requiring them to modularize a server, build rudimentary data models and build 2 routes.

- From a volume perspective, students may have had a tough time completing the full lab
  - Find out where they got stuck and help them unblock
- Students will likely have had issues getting tests to run and deploy
  - Review the process for developing code using TDD
  - Review the check-in process and seeing how passing/failing tests can halt a PR
  - The takeaway here is less about "how to write it" and more about "why we wrote it and how to use it"

### TOPIC 1: Entity Data Modeling

- **Why** (5 min)
  - We need a way to fully describe real world entities
    - Declaring Properties and Behaviors
    - Validation
    - Business Rules
- **What** (10 min)
  - "Data Models" are a part of MVC architecture (The "M")
  - They describe shape (what properties does an object have)
  - They describe rules (what is required, data types, etc)
  - They adhere to basic behaviors (CRUD)
  - They can apply business rules
  - Models generally represent entities (like a type of food)
  - Collections are generally an interface to a group of Models (i.e. a database/table)
- **How** (15 min)
  - Use plenty of diagrams and as you describe the above topics
    - Diagram "food" as a data model

### TOPIC 2: SQL Databases vs NoSQL

- **Why** (5 min)
  - JSON is the standard - every language can read and write
  - It can deeply describe a complex object unlike a Relational DB
- **What** (10 min)
  - SQL Databases Store data in a "Record", not a "Document".
    - Resembles Tablar data.
    - Rows in table rather than key values in an object.
  - There are tradeoffs
    - Valid relational data that ensures data integrity.
    - Small and segregated data into discreet tables.
    - Does not scale horizontally as well as noSQL.
- **How** (15 min)
  - Lead the students in a differences and pros/cons discussion between SQL and NoSQL
    - Highlighting things like relations, documents, complex models, scale (horizontal vs vertical), etc
  - Postgres is one of many SQL dialects.
  - Open and use the `psql` CLI and demonstrate some basic commands, navigating a db, tables, records, etc

### TOPIC 3: Data Collections / Repositories

- **Why** (5 min)
  - Rather than deal directly with schemas, we can create an abstraction layer, called a collection
  - This simply wraps the sequelize specific methods with more familiar/common methods
    - Like - `save()`, `delete()`, etc.
- **What** (10 min)
  - Create an interface class for a collection of instances of a `Sequelize` schema
    - A class that is "A Model" which has all of the common things
      - Methods for each CRUD operation
    - This is important for scale and extensibility
      - Our code will always now use the interface and call generic methods like `create()`
        - The underlying databases (MongoDB, Pg, etc) will turn that into `.save()` or whatever their equivalent is!
        - This means
- **How** (20 min)
  - `collection` demo
  - Re-Build the modeling demo from the previous class, using a collection to wrap the schema
  - Write some tests that assert saving data (more on that later)
- **Discussion Points**
  - How can this idea support models that are for other databases? (pg, memory, etc)
  - What if we had 100 models? Is there a way to make the collections DRY?

## Lab Notes

Lab-04 requires partners for the first hour of lab.  Review the pairing expectation detailed in the lab instructions with students.  

After you review the lab requirements, lead the students in a "UML" exercise. How should they architect the files? What functions might they need? Help them draw the pictures on your whiteboard.

> Every lab requires a UML diagram. You should lead the creation of this drawing with the class and then allow them to use it as that part of the lab requirement. We want to slowly show them how to break these lab requirements down into a workable plan

Students will be refactoring their express routers to use the collection class instead of the Sequelize models directly.

## What might students struggle with today?

- Creating associations with sequelize requires some extra steps to insure that join table records are created along with other new records if utilizing a Many-To-Many relationship.

## Past bugs, issues or surprises...

## General Comments and Notes
