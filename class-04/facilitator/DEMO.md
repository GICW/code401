# Demos: Data Modeling

We're hitting on 2 major points today

- Modeling Data with SQL
  - Data in SQL databases can be associated with other records / tables.
- Using a Collection design pattern to handle CRUD, making our router logic more generic.
  - all database specific operations should be moved to a module designed to handle only database stuff.
  - Build out a "Food" and "Recipe" data model with a schema (and potentially your validator library).
  - Use a join-table to associate "Food" and "Recipe" records with a key.

## Models

> `demo/data-models`

- Create 2 very simple sequelize schemas for customers, and orders
- Use the sequelize `.hasMany()` and `.belongsTo()` methods to create an association
- The code is nice and simple, and should reinforce your lecture on modeling
  - Schemas present data shape and validation
  - The ORM (Sequelize) provides CRUD functionality
- As you build and use the schema, show the data in your SQL client.
  - CLI, Compass, etc.
  - Good for the students to see a couple of tools that can show them their database.
  - Also good to see that code can put things into (or remove them) from the database
  - Compare and contrast this with MongoDB / noSQL.

This demo should be built in 2 phases.

### Collection Class

In phase 4, we'll still be using our Sequelize model. However, we'll be creating an ES6 class to use as an more standardized way to interact with the model. Remember that our API is already coded to use simpler, more common methods: `create()`, `read()`, `update()`, and `delete()`. This "collection" class provides those methods for the API and then in turn calls the correct Sequelize methods.

#### Why?

- The Model itself can still do all of the complex Sequelize things (hooks, joins, etc)
- The API keeps calling the methods it already knows how to call.
- This allows us to, in the future, add Postgres models, or other database models and if we always write a "collection" class in front of them, the API can stay simple
