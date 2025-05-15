# Lecture Guide: Redux - Asynchronous Actions

## TOPIC 1 - Thunk!

- **Why** (10 min)
  - Data is generally only interesting when it persists
    - We want to retrieve real data from a trusted, reliable source for our application
    - We also want to save it back to the server when things change
  - We've done this many times with `superagent`, `fetch`, `axios`, etc
  - But Redux doesn't make this easy
  - And we need to have some real conversations about "when" we save/fetch data
- **What** (20 min)
  - Actions must be objects, period.
  - Action Creators therefore must return objects.
  - But ... in the real world, we do asynchronous things like talk to servers
  - Enter "thunk", which lets our action creators return a function instead of an object.
    - Thunk Middleware executes that function THEN dispatches the actual action, which returns that object.
- **How** (60 min)
  - We will demo how thunk works by writing it
  - The demo includes a full breakdown of how async actions work with and without thunking.
    - Basically, try to make an API in an action. Witness the failure
    - Add thunk middleware. Savor the Win.
- **Experimentation and Discovery Ideas** (30 min)
  - The code here isn't terribly complex. Once you add the "real" thunk as a dependency, it's really a matter of creating the action properly.
  - Once demo is completed and the theory understood, engage the students in a conversation about data access in a client side application
    - These conversations are very important with regards to data integrity, scale, and user experience (you'd want to know when a product is out of stock in real time!)
    - When do we get the initial data from the server?
      - You can use an effect hook to fetch before first mount
      - You can use `componentDidMount()` in a class component
      - You can force the user to take an action to start the initial fetch process
    - How do we stay in sync with the server?
      - Things will change very often on the server.
      - Every time our application does any sort of write operation (CREATE/PUT/DELETE), we need to refresh the data
      - But what about when other applications do the same thing?
        - You can periodically refresh the data (polling)
        - You can use realtime communications to get notifications from the server
          - Configure the API to send an event to the hub server with payload on all writes
          - Connect the React app to a hub server using `socket.io`
            - Whenever an event happens, take the payload and update the store

## Examples

### Thunk Middleware

This is for example only ... use the real 'redux-thunk' from npm

```javascript
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
```

### An async action

```javascript
export const getRemoteData = () => async dispatch => {
  let results = await fetch(api);
  let records = await results.json();
  dispatch(getAction(records));
};

### How can you make an asycn action run at application startup?

- DISCUSS!
