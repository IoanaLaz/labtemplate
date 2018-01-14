'use strict';
module.exports = (sequelize, DataTypes) => {
  var prescription = sequelize.define('prescription', {
    id_client: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return prescription;
};