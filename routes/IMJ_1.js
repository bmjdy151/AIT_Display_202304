var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('IMJ_1', { title: 'IMJ1' });
});

module.exports = router;