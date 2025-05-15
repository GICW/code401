# Lecture Guide: Authentication

Lecture notes here are a guideline for general Authentication topics. Feel free to add time and commentary on the over-arching topic of web security, ciphers, encryption, SSL, etc.

## TOPIC 1: Authentication

> This initial part of lecture is intentionally "Big Picture" so that students can understand the broader view / architecture that they will need to implement.

- **Why** (5 min)
  - Websites have many things that only certain people can see
    - Profile Information, Balances, Friends Lists, etc
  - APIs have data that they might want to restrict access to
- **What** (10 min)
  - Authentication vs Authorization
    - Authentication = Valid Identity = "You are who you say you are"
    - Authorization = Permissions  = "You are allowed access based on who you are"
  - User accounts exist on a server with passwords stored securely
    - What does "secure storage look like?"
    - (Take suggestions, talk it through)
  - Users provide their login credentials (username + password) to a server
  - The server matches up what is stored vs what was sent
  - Responds back with a token or some key that can be re-used by the client/user
    - This is not unlike the API keys that you get after you login to a service like Yelp or Movies that you have to use to access the API data
- **How** (30 min)
  - Interactive Discussion / Drawings
  - How can we prove who you are?
    - You'll need an account
      - Generally, servers have a POST route to `/signup`
      - Provide the basics only
        - username, password, email, name
        - Why? From a UX standpoint, we don't want a lengthy and complicated signup process to get in the way of a customer!
      - What do we do with that password?
        - Never store in in plain text
        - Encrypt it and store that instead of the plain text password
        - We will be using a system called `bcrypt`
          - This is a "one way cipher" that can never be "un-encrypted", cracked, re-created, or read (more on this later)
      - Signing into your account via `/signin`
        - Basic auth sends a (poorly) encrypted `username:password` string (using base 64 encoding) to the server in a header
          - Base64 is encoded (can be reversed), not encrypted (more on this later)
        - The server then takes those 2 bits of information and attempts to validate you
          - Since the actual password wasn't stored, how can we possibly do that?
            - Let the students mull this over...
            - The server must encrypt what was sent in as a password on the login attempt and re-encrypt it to see if that validates against the encrypted password we actually saved.
        - Once you are considered to be "logged in" Create a token and allow the user access
          - This "bearer token" will be used in a future lab.
- **Experimentation and Discovery Ideas**
  - Students have encountered all of these ideas before (other than the encryption piece) as users of the internet
  - Allow them to drive some of the solutions
  - See if they can see the flaws in the systems they have used
    - i.e. If the best practice is for passwords to be encrypted like this, how can my password ever be exposed to a hacker?
      - Answer: not even banks encrypt them right!

## TOPIC 2: Encoding and Encryption

- **Why** (5 min)
  - In basic auth, the username and password is encoded, not encrypted and sent to the server as plain text
    - We need to be able to decode it on the server side to do a proper hash check, so it must be de-codable
    - For this reason, servers should always use SSL, which encrypts the packets of information during transport
  - Servers are inherently insecure and targets for hackers
    - It would be an epic failure if users' passwords were exposed
    - So ... we encrypt them and store them in such a way so that even if they got stolen, they'd be useless.
- **What** (10 min)
  - Base64 Encoding
    - Simple encoding that does a transformation of characters into another character string
    - You can encode/decode and always get the same strings in both directions
  - bcrypt Encryption
    - One Way Cipher
    - How it works is largely a mystery, but here's some of what we know
      - It manipulates your password in some way (maybe sorts, maybe reverses, maybe even encodes it)
      - It adds a random prefix and suffix to your password, related in some way to the environment (perhaps ip, mac, etc)
      - It adds manipulates the resulting password again (n times) by adding more random prefixes/suffixes to it
      - The resulting string is the "hash"
        - This process is impossible to reverse as it's ever-changing and includes environmental details
    - If you do this again and again, it'll never come out the same
    - Even so, any resulting hash from the same password, even though different, will be seen as "valid" to the hash comparison engine
    - It's dark magic, for sure.
- **How** (30 min)
  - Interactive Demo (demo/passwords)
    - Base64: Create a user:pass combination and encode/decode it
    - bcrypt: Create a password, `.hash()` it multiple times, `compare()` it to see the boolean validation
      - Change single characters to see it break

## TOPIC 3: Authenticating Users

- **Why** (5 min)
  - A truly authenticated system can manage it's own users
  - Users should be able to
    - Sign Up
    - Sign In
    - Edit Themselves
    - Delete Themselves
- **What** (10 min)
  - Have the students help drive the "how" and even identify these steps.
  - We can use a Sequelize Schema to create a users collection in Postgres.
  - We can create an express server that has the appropriate routes
    - `app.post('/signup')` to create a user
    - `app.post('/signin')` to attempt a login
  - The engineering is going to happen during each process
    - Sign Up
      - Accept a POST with a JSON object containing a user object
      - Make sure the user is unique (our schema can help here)
      - Hash the password
      - Create a new user record with the hashed password
      - Return a token as the response
    - Sign In
      - Send username:password as a Base64 Encoded header
      - Find the user in the collection by their username
      - Re-Hash the plain text password used to login and compare it to what we saved for that user
      - If good, send back a token as the response
      - Otherwise, force an error
- **How** (30 min)
  - Interactive Demo (demo/basic/app.js)
  - The demo is meant to be built in stages
    - First, build a very simple, in-memory, monolithic server that does a signup and signin using the steps above
    - Then, refactor it (demo/basic/better-app.js) to use middleware for auth and a simple user model
      - Why?
        - The basic app feels very big and brittle
        - We cannot independently test the functionality that `signin` needs
        - Other routes might also want a user to sign in. Do we want to repeat this?
  - Note: We're returning the user a JWT token. For this lab, gloss that over. We'll get deep with them a few labs from now
- **Experimentation and Discovery Ideas**
