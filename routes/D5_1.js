var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('D5_1', { title: 'D51' });
});

module.exports = router;