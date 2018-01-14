'use strict';
module.exports = (sequelize, DataTypes) => {
  var sale = sequelize.define('sale', {
    id_drug: DataTypes.INTEGER,
    id_prescription: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  });
  sale.associate = (models) => {
    console.log("-> sale has one bill, prescription");
    //sale.hasOne(models.bill, {  foreignKey: 'id_sale',onDelete: 'CASCADE'})
    //sale.hasOne(models.prescription, {foreignKey: 'id_prescription', onDelete: 'CASCADE'})
    console.log("-> sale has many drugs");
    sale.hasMany(models.drug, { foreignKey: 'id_drug', onDelete: 'CASCADE'})
  }
  return sale;
};