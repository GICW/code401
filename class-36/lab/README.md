# LAB - Application State with Redux

**Virtual Store Phase 1:** For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Create a UML diagram of the **Virtual Store** architecture on a whiteboard before you start.
1. Use [Vite](https://vitejs.dev/guide/) to create a new React application named `storefront`.
1. No starter code is given for this lab. 
1. Install necessary dependencies as needed as you move forward.
1. Add `'react/prop-types': ['off']` into your rules object in the `.eslintrc.cjs` file to allow for any prop-types.
1. In the command line, run `npm run dev` and confirm that the application loads in the browser.  
1. Create an **EMPTY** GitHub Repository named `storefront`.
1. Follow GitHub instructions labeled "…or create a new repository on the command line".
1. Note: after completing the above step, only the README will have been pushed to your GitHub Repo.
1. Immediately `ACP` after adding your newly created repo to GitHub; this will add the starter-code to your repo and give you the option to rollback changes to the base starter code if necessary.
1. Create and work in a new branch for today called `redux`.
1. Access environment variables stored in your  `.env` as per [the Vite Docs](https://vitejs.dev/guide/env-and-mode.html#env-files).  i.e. `import.meta.env.VITE_<variable-name>`.

## Business Requirements

Refer to the [Virtual Store System Overview](../../apps-and-libraries/store/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the **storefront application**, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

![Preview](preview.png)

## Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements.

- Create a visually appealing site using [Material UI](https://material-ui.com/).
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
  - Identify that category as selected (change of class/display).
  - Show a list of products associated with the category.

### Application Architecture

Create the Virtual Store application as follows:

- Begin with creating your application using `create-react-app`.
- Install Material UI as a dependency.
- Write an `<App />` component that serves as the container for all sub-components of this application.
  - A `<Header />` component which shows the name of your virtual store.
  - A `<Footer />` component which shows your copyright and contact information.
  - A `<Categories />` component:
    - Shows a list of all categories.
    - Dispatches an action when one is clicked to "activate" it.
  - A `<Products />` component:
    - Displays a list of products associated with the selected category.

### Proposed File Structure

Utilizes [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/) conventions.

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── public
├── src
│   ├── __tests__
│   │   └── App.test.jsx (integration test)
│   ├── Components
│   │   ├── ActiveCategory (stretch goal)
│   │   │   ├── ActiveCategory.test.jsx (unit test)
│   │   │   ├── index.jsx
│   │   │   └── styles.scss (possibly, in tandem with MUI)
│   │   ├── Categories
│   │   │   ├── Categories.test.jsx
│   │   │   └── index.jsx
│   │   ├── Footer
│   │   │   ├── Footer.test.jsx
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.test.jsx
│   │   │   └── index.jsx
│   │   └── Products
│   │       ├── index.jsx
│   │       └── Products.test.jsx
│   ├── store
│   │   ├── active-category.js (stretch goal)
│   │   ├── categories (notice structure with unit test)
│   │   │   ├── categories.test.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── products.js
│   ├── App.jsx
│   ├── App.scss
│   └── main.jsx
├── .gitignore
├── .eslintrc.json
├── package.json
└── README.md
```

### Notes on constructing the Redux Store:

- Categories
  - State should contain a list of categories as well as the active category.
    - Each category should have a normalized name, display name, and a description.
  - Create an action that will trigger the reducer to change the active category.
  - Update the active category in the reducer when this action is dispatched.
- Products
  - State should be a list of all products.
    - Each product should have a category association, name, description, price, inventory count.
  - Create an action that will trigger when the active category is changed.
    - HINT: Multiple reducers can respond to the same actions.
  - Create a reducer that will filter the products list based on the active category.
- Active Category
  - State should store active category.
    - Other components (products, etc) might need to reference this.

### Testing

- Testing for the core behaviors (user stories) of the application is required.
- Consider leveraging a chatbot as needed. 

> You have permission to use a chatbot to write tests for code blocks of your choice.  Practice engineering optimal prompts to engage AI.  Anytime you utilize AI, be sure and document the actual contribution made by AI along with the prompt you used to generate the response in your `README.md`.

### Stretch Goal

Add another component called `<ActiveCategory />` that appears above the products list that might better inform the user as to the name/description of the currently active category.

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations.
