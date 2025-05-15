'use strict';

// connects to our database depending on the URI set as an environment variable, 
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection failed:', err));



// our schema definitions
const people = require('./people.model.js');

module.exports = {
  // exporting sequelize instance and Models configuring your data layer.
  db: sequelize,
  People: people(sequelize, DataTypes),
};
