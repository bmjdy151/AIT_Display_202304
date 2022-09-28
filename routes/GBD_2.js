var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('GBD_2', { title: 'GBD2' });
});

module.exports = router;