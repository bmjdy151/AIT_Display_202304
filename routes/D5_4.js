var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('D5_4', { title: 'D54' });
});

module.exports = router;