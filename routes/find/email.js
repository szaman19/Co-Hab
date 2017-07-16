var express = require('express');
  var router = express.Router();

var Users = require('../../models/users')

router.get('/:email', function(req, res) {
  Users.findOne({
    email: req.params.email
  },
    function(err, usrs){
    if(err){
      res.send(err);
    }else{
        if(usrs){
            res.status(200).json(usrs);
            console.log(usrs);
            console.log("Maybe you got it right shithead");
        }else{
          res.status(500).send("Email not found");
          console.log("Maybe I am an idiot?");
        }

    }
  });
});

module.exports = router;
