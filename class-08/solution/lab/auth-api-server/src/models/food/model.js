'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: { type: DataTypes.STRING, allowNull: false },
  calories: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), allowNull: false },
});

module.exports = foodModel;
