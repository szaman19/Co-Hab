const routes = require('express').Router();
const login = require('./login');
const signup = require('./signup');

routes.get('/', function(req, res) {
  res.status(200).json({ message: 'Auth Router' });
});

routes.use('/login',login);
// routes.use('/signup', signup);
module.exports = routes;
