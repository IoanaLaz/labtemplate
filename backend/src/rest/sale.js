var express = require('express');
var router = express.Router();
var sale = require('../service/').sale;

router.get('/', sale.list);
router.get('/:id', sale.findById);
router.post('/', sale.create);
router.delete('/:id', sale.delete);
router.put('/:id', sale.updateSale);

module.exports = router;