[Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure){:target="\_blank"}

1. Summarize the five principles for structuring state.
   - Group related state. They probably get used by the same component.
   - Avoid contradictions. Needing to change two pieces of data to avoid one being "wrong" is a source of bugs.
   - Avoid redundant state. If you can calculate it during rendering, storing it as dedicated state is wasteful and error prone.
   - Avoid duplicate state. Similar to the above, if you need to edit it in two places, it's a bug.
   - Avoid deeply nested state. Updates require copying all objects at all levels.

[Passing State Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context){:target="\_blank"}

1. What problem do Contexts aim to solve?
   - When many Components need the same data, but are far apart in the tree & would need props to pass the data to them.
2. What is one technique to try before useContext?
   - Passing props. It's always better to be explicit about where data is shared.
   - Extract intermediate "structural" components to take children instead of passing props through.
3. What hook complements useContext for complex applications?
   - useReducer
