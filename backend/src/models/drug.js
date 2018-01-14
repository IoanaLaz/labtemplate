'use strict';
module.exports = (sequelize, DataTypes) => {
  var drug = sequelize.define('drug', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return drug;
};