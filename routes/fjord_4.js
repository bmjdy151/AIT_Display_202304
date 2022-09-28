var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fjord_4', { title: 'fjord4' });
});

module.exports = router;