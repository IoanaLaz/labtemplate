'use strict';
module.exports = (sequelize, DataTypes) => {
  var sale = sequelize.define('sale', {
    id_drug: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sale;
};