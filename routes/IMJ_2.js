var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('IMJ_2', { title: 'IMJ2' });
});

module.exports = router;