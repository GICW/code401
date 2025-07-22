'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users/model.js');
const foodModel = require('./food/model.js');
const clothesModel = require('./clothes/model.js');
const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const testOrProduction = (environment === 'test' || environment === 'production');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // for self-signed certs; safe to use in dev
    },
  },
});

const users = userModel(sequelize, DataTypes);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: new Collection(users),
  food: new Collection(food),
  clothes: new Collection(clothes),
};
