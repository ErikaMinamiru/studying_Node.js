var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/default', function(req, res, next) {
  res.render('index.ejs');
});

/*練習用のページ */
router.get('/practice', function(req, res, next) {
  res.render('practice.ejs');
});

/*topページ */
router.get('/', function(req, res, next) {
  res.render('top.ejs');
});

/*買い物リストIndexページ */
router.get('/pg8_index', function(req, res, next) {
  res.render('pg8_index.ejs');
});


module.exports = router;
