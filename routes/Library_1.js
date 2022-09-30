var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Library_1', { title: 'Library 1' });
});

module.exports = router;