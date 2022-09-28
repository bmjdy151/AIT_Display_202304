var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MV_1', { title: 'MV1' });
});

module.exports = router;