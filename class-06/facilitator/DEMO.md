# Demo: Authentication

While we can make mention of the API server that was built in the previous module, this module is all about authentication (we're going to marry the 2 servers as the Capstone for this week), so beginning with this demo, work in a server that essentially only does authentication.  It'll have a couple of test routes in it, but nothing of consequence.

As Instructor, you'll be building simple demos each day simply focus on the core concept, not the overall building of the final server.  You'll be building using an "in memory" data model for the users. Your mission is to teach authentication, not modeling. The students will be required to use Postgres each day, however. They will be marrying the concepts of auth with their previous knowledge of SQL ... expect this to be a challenge for them, but a good one!

This module is much more about concept and wiring than code logic, so be sure and cement the core concepts as you build this out.

## Encoding and Encryption

> `demo/passwords`

This simple demo goes along with the lecture topic that covers both Base64 Encoding and BCrypt encryption.

This is to be built "top down" as a means of cementing the lecture topic with some code. This demo works best when done as a part of lecture, so that you can easily showcase the concepts in code without it feeling too heavy.

The main takeaways and focus areas here should be

- Base64 encoding always results in the same encoded string
- You can easily encode a string and then decode it back to read it in it's original form
- BCrypt, on the other hand always produces a different hash, even when given the same input
- It can, however validate any hash it produced with the same input
- The hashes provided in the demo will work properly for the created password
- Note that the last one has one letter changed, to prove that it will invalidate a bad hash

## Auth Server Demo

> `demo/basic`

### Demo: Basic Authentication Server (monolithic)

This server should be built in response to your "how should we build an auth server" discussion with the class.

- Scaffold out in a single file the basic things you need:
  - POST handler for `/signup`
  - POST handler for '/signin`
  - `users` model for managing the user in Postgres.
  - In the 2 routes, follow the steps to create a new user and to sign them in
    - Keep the logic in the routes

- Lab today is for the students to modularize and clean up this beast
  - Students will be required to create middleware from the example
