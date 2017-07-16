var router = require('express').Router();

router.get('/',function(req,res){
  console.log(req);
  res.status(200).json({message:"log in Router"});
});

router.param('info',function(req,res,next){
  console.log('What is happeining');
  next();
});

router.route('/:info').get(function(req,res,next){
  res.status(200);
});

module.exports = router;
