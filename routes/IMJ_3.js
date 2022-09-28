var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('IMJ_3', { title: 'IMJ3' });
});

module.exports = router;