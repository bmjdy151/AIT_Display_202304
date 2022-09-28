var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('GBD_1', { title: 'GBD1' });
});

module.exports = router;