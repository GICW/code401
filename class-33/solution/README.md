# SOLUTION - `<Login />` and `<Auth />`

## Implementation Notes

- Students will be tasked with using the Auth/Login system
- They are provided a usable version of these component/context in the lab
- Their task will be to integrate that into a "CRUD" application and restrict access based on permissions (the To Do Application)
- The goal for this lab is not to implement Login/Auth, but to understand it at it's core purpose, and to seamlessly implement this as a means to solve a real world problem set.

- `<Login />` must be converted to a function component
  - `useState()` must be used for managing the form
  - `useContext()` must be used for hooking into `LoginContext`
- `<Auth />` must be converted to a function component
  - `useContext()` must be used for hooking into `LoginContext`
- `<ToDo />` must be protected by `<Auth >`

### Grading Standards & Notes

- Features
- Code Quality
  - As Noted Above
- Testing
  - Functional Tests Required
  - State changes must be asserted
- Deployment
  - Code Sandbox
- Documentation
  - README Standards
  - React Docs Required
