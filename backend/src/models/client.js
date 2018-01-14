'use strict';
module.exports = (sequelize, DataTypes) => {
  var client = sequelize.define('client', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    sex: DataTypes.STRING,
    address: DataTypes.STRING
  }); 
  client.associate = (models) => {
    console.log("-> client has many prescriptions");
    client.hasMany (models.prescription, { foreignKey: 'id_client'})
  }
  return client;
};