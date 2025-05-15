[useEffect hook](https://react.dev/reference/react/useEffect#reference){:target="\_blank"}

1. What is the main intended use case for the useEffect hook?
   - Interacting with external (non-React) systems.
1. How does the effect's logic interact with the component?
   - It should call set functions from useState.
1. What is the importance of the return value from the effect's logic function?
   - The return value is the "cleanup function" which makes sure that whatever the logic does that React doesn't know about gets taken care of.
