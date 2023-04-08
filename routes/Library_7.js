var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Library_7', { title: 'Library 7' });
});

module.exports = router;