var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MV_2', { title: 'MV2' });
});

module.exports = router;