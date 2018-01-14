'use strict';
module.exports = (sequelize, DataTypes) => {
  var bill = sequelize.define('bill', {
    id_sale: DataTypes.INTEGER,
    sale_date: DataTypes.DATE,
    payment: DataTypes.INTEGER
  });
  bill.associate = (models) => {
    console.log("-> bill has one sale");
    //bill.hasOne(models.sale, { foreignKey: 'id_sale', onDelete: 'CASCADE'})
  }
   
  return bill;
};