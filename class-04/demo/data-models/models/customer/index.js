'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
