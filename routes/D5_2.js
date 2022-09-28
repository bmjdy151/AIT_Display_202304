var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('D5_2', { title: 'D52' });
});

module.exports = router;