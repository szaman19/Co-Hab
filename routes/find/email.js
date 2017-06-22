var express = require('express');
  var router = express.Router();

var Users = require('../../models/users')

router.get('/', function(req, res) {
  Users.findOne({
    email: req.param.email
  },
    function(err, usrs){
    if(err){
      res.send(err);
    }else{
        res.status(200).json(usrs[0]);
    }
  });
});
module.exports = router;
