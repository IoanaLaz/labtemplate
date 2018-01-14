var express = require('express');
var router = express.Router();
var client = require('../service/').client;

router.get('/', client.list);
router.get('/:id', client.findById);
router.post('/', client.create);
router.delete('/:id', client.delete);
router.put('/:id', client.updateClient);

module.exports = router;