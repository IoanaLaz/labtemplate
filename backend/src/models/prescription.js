'use strict';
module.exports = (sequelize, DataTypes) => {
  var prescription = sequelize.define('prescription', {
    id_client: DataTypes.INTEGER,
    id_drug: DataTypes.INTEGER,
    hander: DataTypes.STRING,
    diagnostic: DataTypes.STRING,
    prescription_type: DataTypes.STRING,
    release_date: DataTypes.DATE,
    dosage: DataTypes.INTEGER
  });

  prescription.associate = (models) => {
    console.log("-> prescription belongs to clients, drugs");
    prescription.belongsTo(models.client, { foreignKey: 'id_client', onDelete: 'CASCADE'});
    console.log()
    //prescription.belongsTo(models.drug, {foreignKey: 'id_drug', onDelete: 'CASCADE'})
    console.log("-> prescription has one sale");
    // prescription.hasOne(models.sale, {foreignKey: 'id_prescription', onDelete: 'CASCADE'})
  }

  return prescription;
};