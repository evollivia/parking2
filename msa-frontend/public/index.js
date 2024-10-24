var express = require('express');
var router = express.Router();

/* 404 not found */
router.get('/notfound', function(req, res, next) {
  res.sendFile(__dirname + '/views/notfound.html')
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html')
});

/* product registration */
router.get('/product', function(req, res, next) {
  res.sendFile(__dirname + '/views/product.html')
});

/* product list */
router.get('/products', function(req, res, next) {
  res.sendFile(__dirname + '/views/products.html')
});

/* product one view */
router.get('/product/:pno', function(req, res, next) {
  res.sendFile(__dirname + '/views/productone.html')
});

module.exports = router;
