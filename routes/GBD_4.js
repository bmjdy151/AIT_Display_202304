var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('GBD_4', { title: 'GBD4' });
});

module.exports = router;