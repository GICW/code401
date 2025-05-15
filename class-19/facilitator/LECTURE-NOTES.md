# Lecture Notes: AWS: Events

Use this document to add more details, flavor, hints, tricks, ideas to make lecture better. This should tie into the "Why, What, How" sections of the facilitator's README.

Consider the [README](README.md) in conjunction with the [DEMO](DEMO.md) as the single source of truth for a given class, while this document is more of the living, breathing, set of notes from all instructors as to what is historically working well.

**Event Driven Development (again)**

- Non-linear program flow
- Cloud Architecture is very event driven
  - Lambdas (functions) fire in response to all sorts of activities
  - Services (e.g. S3) fire events when interesting things happen
  - Databases trigger events on every operation
  - In the "serverless" world, when we talk about "Code needing a place to run, and something to tell it when to run" ... queues are very often that trigger.

**So ... what is a Queue?**

- Quite literally, a queue is a list of things to process.
  - We call these things "messages"
  - Messages carry a "payload"
    - This can be simple text, JSON, Binary, etc
- Queues are like disconnected conversations
- There are 2 participants
  - A "Sender" puts something into the queue
  - A "Consumer" takes messages off the queue and processes them
    - Consumers delete the messages when they are done.
  - There can be many consumers (scale)
    - But each message is only intended to be processed once
- Types of queues
  - Standard
    - Unordered.
    - Think of this as a bingo ball cage
  - Ordered (FIFO)
    - Ordering is important
    - This is more of a classic "Queue" where things generally are dependent.
    - Much tougher to implement on the consumer side.

**Use Cases**

- Micro Architecture
  - Trigger code in other systems, languages, etc to run
  - Simplifies and tightens up your code base
- Distributed Processing
  - Handle common events at scale
