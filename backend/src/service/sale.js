"use strict";

const sale = require('../models').sale;

exports.list = function (req, res) {
    sale.findAll({
    include: [{ all:true }]
  }).then(sale => {
    res.jsonp(sale);
  });
};

exports.create = function (req, res) {
  res.jsonp(sale.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  sale.findById(id).then(sale => {
    res.jsonp(sale);
  });
};

exports.updateSale= function (req, res) {
  let id = req.params.id;
  sale.findById(req.params.id)
    .then(sale => {
      if (!sale) {
        return res.status(400).send({
          message: 'Sale Not Found'
        });
      }
      sale.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  sale.findById(req.params.id)
    .then(sale => {
      if (!sale) {
        return res.status(400).send({
          message: 'Sale Not Found',
        });
      }
      return sale
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};