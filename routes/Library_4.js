var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Library_4', { title: 'Library 4' });
});

module.exports = router;