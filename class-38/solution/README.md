# SOLUTION - Redux - Asynchronous Actions

## Grading Standards & Notes

- Features
  - Get the initial fetch and the detail fetch working
  - Multiple reducers should be used (categories, products, cart)
  - Each should be fed by an asynchronous action
- Code Quality
  - Good modularity
- Testing
- Deployment
  - GitHub Actions Tests
  - Code Sandbox App
- Documentation
  - README Standards
  - React Required

### Lab Assistance Notes

They'll need to create 3 reducers and action sets.

Its likely that they will make 2 actions, both called "GET" that end up in both reducers firing. Be on the lookout for oddities like this as they go through their implementations.  This potential case is not covered in lecture, in hopes that we run into this during lab or code review as a discussion point.

Tests are required. Guide the students into mocking out the superagent calls.
