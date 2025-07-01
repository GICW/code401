'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./lib/collection.js');
const customerSchema = require('./customer');
const orderSchema = require('./order');

const POSTGRES_URI = process.env.DATABASE_URL;

let sequelize;

if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize('sqlite::memory:', { logging: false });
} else {
  sequelize = new Sequelize(POSTGRES_URI, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
}

const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

customerModel.hasMany(orderModel, {
  foreignKey: 'customerId',
  sourceKey: 'id',
  as: 'Orders', 
});
orderModel.belongsTo(customerModel, {
  foreignKey: 'customerId',
  targetKey: 'id',
  as: 'Customer',
});

// Collections
const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);

module.exports = {
  db: sequelize,
  customerCollection,
  orderCollection,
  Customer: customerModel,
  Order: orderModel,
};
