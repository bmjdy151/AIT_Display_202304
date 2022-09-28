var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('GBD_3', { title: 'GBD3' });
});

module.exports = router;