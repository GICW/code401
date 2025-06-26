'use strict';

const { Sequelize, DataTypes } = require('sequelize');

// Use SQLite in test, otherwise use Postgres
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelizeOptions = process.env.NODE_ENV === 'test'
  ? {}
  : {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    };

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

sequelize.authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection failed:', err));

// Load model
const people = require('./people.model.js');

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes),
};
