var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('D5_3', { title: 'D53' });
});

module.exports = router;