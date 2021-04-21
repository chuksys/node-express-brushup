var express = require('express');
var router = express.Router();
let indexHandler = require('../controllers/index');

/* GET home page. */
router.get('/', indexHandler.index);

module.exports = router;
