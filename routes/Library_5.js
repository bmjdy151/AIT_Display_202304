var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Library_5', { title: 'Library 5' });
});

module.exports = router;