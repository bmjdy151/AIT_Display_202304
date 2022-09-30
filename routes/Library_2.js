var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Library_2', { title: 'Library 2' });
});

module.exports = router;