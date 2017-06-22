const routes = require('express').Router();

const email = require('./email');
const phone = require('./phone');

var Users = require('../../models/users');

routes.get('/', function(req, res) {
  Users.find(function(err,usrs){
    if(err){
      res.send(err);
    }else{
      res.status(200).json(usrs);
    }
  });
});

// routes.get('/:email',email);
routes.use('/:email',email);
routes.use('/:phone',phone);
module.exports = routes;
