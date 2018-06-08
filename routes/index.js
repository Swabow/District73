var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Warriorz botha'});
});
/* Error page.
router.get('/err',function(req,res,next){
  res.render('error',{title :'Express'});
});*/
/*GET product detail page*/
router.get('/prodetail',function(req,res,next){
  res.render('shop/product-detail',{title:'Warriorz botha'});
});
/*GET cart page*/
router.get('/cart',function(req,res,next){
  res.render('shop/cart',{title:'Warriorz botha'});
});
/*GET aution history page*/
router.get('/myautions',function(req,res,next){
  res.render('shop/aution_history',{title:'Warriorz botha'});
});
/*GET profile page*/
router.get('/myprofile',function(req,res,next){
  res.render('shop/user_profile',{title:'Warriorz botha'});
});
/*GET sign up page*/
router.get('/signup',function(req,res,next){
  res.render('shop/sign_up',{title:'Warriorz botha'});
});
module.exports = router;
