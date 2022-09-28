var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MV_4', { title: 'MV4' });
});

module.exports = router;