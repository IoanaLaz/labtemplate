var express = require('express');
var router = express.Router();
var bill = require('../service/').bill;

router.get('/', bill.list);
router.get('/:id', bill.findById);
router.post('/', bill.create);
router.delete('/:id', bill.delete);
router.put('/:id', bill.updateBill);

module.exports = router;