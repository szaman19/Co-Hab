var express = require('express');
  var router = express.Router();

var Users = require('../../models/users')

router.get('/', function(req, res) {
  Users.find({
    email: req.param.phone
  },
    function(err, usrs){
    if(err){
      res.send(err);
    }else{
        res.status(200).json(usrs);
    }
  });
});
module.exports = router;
