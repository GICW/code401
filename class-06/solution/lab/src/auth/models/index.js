'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./users-model.js');

const environment = process.env.NODE_ENV;
let DATABASE_URL = process.env.DATABASE_URL;

let db_config = {
  logging: false,
};

switch (environment) {
  case 'test':
    DATABASE_URL = 'sqlite::memory:';
    break;
  case 'production':
    db_config.dialectOptions = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
    break;
  case 'development':
    db_config.logging = true;
    break;
  default:
    console.log('Using default DB configuration ' + DATABASE_URL, db_config);
    db_config.dialectOptions = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
    break;
}

const sequelize = new Sequelize(DATABASE_URL, db_config);

module.exports = {
  db: sequelize,
  User: UserModel(sequelize, DataTypes),
};
