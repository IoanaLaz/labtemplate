'use strict';
module.exports = (sequelize, DataTypes) => {
  var bill = sequelize.define('bill', {
    id_sale: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bill;
};