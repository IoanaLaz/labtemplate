'use strict';
module.exports = (sequelize, DataTypes) => {
  var client = sequelize.define('client', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    sex: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return client;
};