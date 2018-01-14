"use strict";

const prescription = require('../models').prescription;
const client = require('../models').client;

exports.list = function (req, res, next) {
  prescription.findAll({
    where: req.query,
    include: [{ all: true }]
  }).then(prescription => {
    res.jsonp(prescription);
  }).catch(next);
};

exports.create = function (req, res) {
  res.jsonp(prescription.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  prescription.findById(id, {
    include: [{ model: user, as: 'client' }]
  }).then(prescription => {
    res.jsonp(prescription);
  });
};

exports.findClient = function (req, res) {
    prescription.findById(req.params.id, {
    include: [{ model: user, as: 'client' }]
  }).then(client => {
    res.jsonp(client);
  })
}

exports.updatePrescription= function (req, res) {
  let id = req.params.id;
  prescription.findById(req.params.id)
    .then(prescription => {
      if (!prescription) {
        return res.status(400).send({
          message: "Prescription not found"
        });
      }
      prescription.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  prescription.findById(req.params.id)
    .then(prescription => {
      if (!prescription) {
        return res.status(400).send({
          message: 'Prescription Not Found',
        });
      }
      return prescription
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}