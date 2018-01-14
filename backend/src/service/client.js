"use strict";

const client = require('../models').client;

exports.list = function (req, res) {
  client.findAll({
    include: [{ all:true }]
  }).then(client => {
    res.jsonp(client);
  });
};

exports.create = function (req, res) {
  res.jsonp(client.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  client.findById(id).then(client => {
    res.jsonp(client);
  });
};

exports.updateClient = function (req, res) {
  let id = req.params.id;
  client.findById(req.params.id)
    .then(client => {
      if (!client) {
        return res.status(400).send({
          message: 'Client Not Found'
        });
      }
      client.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  client.findById(req.params.id)
    .then(client => {
      if (!client) {
        return res.status(400).send({
          message: 'Client Not Found',
        });
      }
      return client
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};