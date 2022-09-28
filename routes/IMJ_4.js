var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('IMJ_4', { title: 'IMJ4' });
});

module.exports = router;