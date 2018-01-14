"use strict";

const bill = require('../models').bill;

exports.list = function (req, res) {
  bill.findAll({
    include: [{ all:true }]
  }).then(bill => {
    res.jsonp(bill);
  });
};

exports.create = function (req, res) {
  res.jsonp(bill.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  bill.findById(id).then(bill => {
    res.jsonp(bill);
  });
};

exports.updateBill = function (req, res) {
  let id = req.params.id;
  bill.findById(req.params.id)
    .then(bill => {
      if (!bill) {
        return res.status(400).send({
          message: 'Bill Not Found'
        });
      }
      bill.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  bill.findById(req.params.id)
    .then(bill => {
      if (!bill) {
        return res.status(400).send({
          message: 'Bill Not Found',
        });
      }
      return bill
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};